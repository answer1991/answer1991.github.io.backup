

<div class="alert alert-success">
	<p><a href="https://github.com/answer1991/spring-rmi" title="Go to Demo project" target="_blank">demo project地址</a></p>
</div>

### 1.Sample Interface. 

**首先，定义一个很简单的service interface。**

**Data pojo. 返回service调用数据的pojo。**

	{% highlight java %}
	package com.answer1991.rmi;
	
	public class Account implements Serializable {
		private static final long serialVersionUID = 1L;

		private String id;
		private String name;
		
		//getter and setter
		...
	}
	{% endhighlight %}

**Service Interface. service的接口。**

	{% highlight java %}
	package com.answer1991.rmi;
	
	public interface AccountService {
		public abstract Account getByIdAndName(String id, String name);
	}
	{% endhighlight %}

**Service interface implement. service接口在server端的实现，现在是一个很简单的实现，一般实际情况会加入dao access等。**

	{% highlight java %}
	package com.answer1991.rmi;
	
	public class AccountServiceImpl implements AccountService {
		@Override
		public Account getByIdAndName(String id, String name) {
			Account account = new Account();
			account.setId(id);
			account.setName(name);
			return account;
		}
	}
	{% endhighlight %}

**set up service in Spring container**

	{% highlight xml %}
	<!-- local service -->
	<bean id="accountServiceLocal" class="com.answer1991.rmi.AccountServiceImpl"></bean>
	{% endhighlight %}

***

### 2.Remote Method Invocation (RMI)

Spring通过RmiProxyFactoryBean 和 RmiServiceExporter这两个类让开发者透明的开发traditional RMI(java.rmi.Remote interfaces
and java.rmi.RemoteException)的client和server端。 Traditional RMI比较像remote EJB，但是没有exception的控制和权限控制。 Spring为Remote Context提供Hook，可以加入额外的权限控制类库来实现权限控制。

RMI是重量级的协议，支持Java对象序列化，不支持跨平台（客户端和服务器都必须是Java）。对返回复杂对象比较有利。

**Exporting the service using the RmiServiceExporter.** 通过如下配置，远程service会绑定在'**rmi://HOST:1199/AccountService.**'

	{% highlight xml %}
	<!-- rmi service -->
	<bean id="remoteRmiAccountService" class="org.springframework.remoting.rmi.RmiServiceExporter">
		<!-- the service name -->
		<property name="serviceName" value="AccountService"></property>
		<!-- the service implement -->
		<property name="service" ref="accountServiceLocal"></property>
		<!-- the exported interface -->
		<property name="serviceInterface" value="com.answer1991.rmi.AccountService"></property>
		<!-- the default is 1099, it's wise to override it -->
		<property name="registryPort" value="1199"></property>
	</bean>
	{% endhighlight %}


**On the client side, set up the service proxy bean in Spring container using RmiProxyFactoryBean. 这个返回的就是remote service interface的实现对象。 可以直接注入给service的接口引用。**

	{% highlight xml %}
	<bean id="accountRmiProxy" class="org.springframework.remoting.rmi.RmiProxyFactoryBean">
		<!-- the rmi service url -->
		<property name="serviceUrl" value="rmi://localhost:1199/AccountService"></property>
		<!-- the service interface -->
		<property name="serviceInterface" value="com.answer1991.rmi.AccountService"></property>
	</bean>
	{% endhighlight %}
	
***

### 3.Using Hessian

Hessian提供基于HTTP的二进制远程调用协议，由Caucho开发。 需要加入Hessian的类库。Spring 提供HessianProxyFactoryBean 和 HessianServiceExporter方便开发。

**Hessian不支持Java对象序列化， 支持跨平台。**

**由于它是基于HTTP的，所以要使用自定义的Servlet，这里Spring的DispatcherServlet集成了这个功能。 Set up the DispatcherServlet in web.xml file.**

	{% highlight xml %}
	<servlet>
		<servlet-name>remoting</servlet-name>
		<servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
		<load-on-startup>1</load-on-startup>
	</servlet>
	
	<servlet-mapping>
		<servlet-name>remoting</servlet-name>
		<url-pattern>/remoting/*</url-pattern>
	</servlet-mapping>
	{% endhighlight %}

**Exposing your beans by using the HessianServiceExporter. 根据这样的配置，远程服务绑定到了'http://HOST:8080/CONTEXT-PATH/remoting/AccountService'**

	{% highlight xml %}
	<!-- Hessian -->
	<!-- 注意标识name -->
	<bean name="/AccountService"
		class="org.springframework.remoting.caucho.HessianServiceExporter">
		<property name="service" ref="accountServiceLocal"></property>
		<property name="serviceInterface" value="com.answer1991.rmi.AccountService"></property>
	</bean>
	{% endhighlight %}

**Linking in the service on the client. 生成的remote service proxy，可以直接注入到service interface的引用。**

	{% highlight xml %}
	<bean id="hessianClientProxy"
		class="org.springframework.remoting.caucho.HessianProxyFactoryBean">
		<property name="serviceUrl"
			value="http://localhost:8080/spring-rmi/remoting/AccountService" />
		<property name="serviceInterface" value="com.answer1991.rmi.AccountService" />
	</bean>
	{% endhighlight %}

***

### 4.Spring HTTP Invokers

**Spring HTTP Invokers的传输协议是HTTP，并且支持Java序列化，这对于参数和返回对象比较复杂的情况非常有益。**

**Exposing the service. 也需要Spring的DispatcherServlet。根据这样的配置，远程服务绑定到了'http://HOST:8080/CONTEXT-PATH/remoting/AccountService2'。**

	{% highlight xml %}
	<!-- HttpInvoker -->
	<bean id="/AccountService2" class="org.springframework.remoting.httpinvoker.HttpInvokerServiceExporter">
		<property name="service" ref="accountServiceLocal"></property>
		<property name="serviceInterface" value="com.answer1991.rmi.AccountService"></property>
	</bean>
	{% endhighlight %}

**Generate the service proxy.**
	
	{% highlight xml %}
	<bean id="httpInvokerProxy" class="org.springframework.remoting.httpinvoker.HttpInvokerProxyFactoryBean">
		<property name="serviceUrl" value="http://localhost:8080/spring-rmi/remoting/AccountService2"></property>
		<property name="serviceInterface" value="com.answer1991.rmi.AccountService"></property>
		<!-- 使用httpclient -->
		<property name="httpInvokerRequestExecutor">
			<bean class="org.springframework.remoting.httpinvoker.CommonsHttpInvokerRequestExecutor"/
			>
		</property>
	</bean>
	{% endhighlight %}

**如果要在没有Servlet容器下运行，加入如下的Http server bean.**

	{% highlight xml %}
	<bean name="accountExporter" class="org.springframework.remoting.httpinvoker.SimpleHttpInvokerServiceExporter">
		<property name="service" ref="accountService"/>
		<property name="serviceInterface" value="example.AccountService"/>
	</bean>
		
	<bean id="httpServer" class="org.springframework.remoting.support.SimpleHttpServerFactoryBean">
		<property name="contexts">
			<util:map>
				<entry key="/remoting/AccountService" value-ref="accountExporter"/>
			</util:map>
		</property>
		<property name="port" value="8080" />
	</bean>
	{% endhighlight %}

***

### 5.JAX-WS, Web Service

**Exporting standalone web services using JAX-WS.**   
通过SimpleJaxWsServiceExporter set up， Spring会自动扫描带有@WebSerice注解的bean，并set up相应的web service和生成wsdl。 **Interface和 Interface implement都要加上@WebService注解。**   
**不要在J2EE环境下setup SimpleJaxWsServiceExporter， 这只是为non-J2EE环境设计的，像Tomcat。**
	
	{% highlight xml %}
	<!-- WebService standalone setup -->
	<bean id="wsExporter" class="org.springframework.remoting.jaxws.SimpleJaxWsServiceExporter">
		<property name="baseAddress" value="http://localhost:8082/"></property>
	</bean>
	<!-- the WebService endpoint bean -->
	<bean id="accountServiceEndPoint" class="com.answer1991.rmi.ws.AccountWebService">
	</bean>
	{% endhighlight %}

**Accessing web services using JAX-WS.** 

	{% highlight xml %}
	<bean id="accountWSProxy" class="org.springframework.remoting.jaxws.JaxWsPortProxyFactoryBean" depends-on="wsExporter">
		<property name="serviceInterface" value="com.answer1991.rmi.AccountService"></property>
		<property name="wsdlDocumentUrl" value="http://localhost:8082/AccountService?wsdl"></property>
		<property name="namespaceUri" value="http://ws.answer1991.com"></property>
		<property name="serviceName" value="AccountService"></property>
		<property name="portName" value="AccountServiceEndPort"/>
	</bean>
	{% endhighlight %}

***

### 6.AMQP RPC

Spring Rabbit为Rabbit MQ提供了方便RPC开发的AmqpInvokerServiceExporter和AmqpProxyFactoryBean。

**The server**

	{% highlight xml %}
	<bean id="rpcListener" class="org.springframework.amqp.remoting.service.AmqpInvokerServiceExporter">
		<property name="amqpTemplate" ref="amqpTemplate"></property>
		<property name="serviceInterface" value="com.answer1991.rabbitmq.spring.rpc.AccountService"></property>
		<property name="service" ref="service"></property>
	</bean>
	
	<bean id="service" class="com.answer1991.rabbitmq.spring.rpc.AccountServiceImpl"></bean>

	<rabbit:connection-factory id="connectionFactory"
		publisher-confirms="true" publisher-returns="true" />

	<rabbit:template id="amqpTemplate" connection-factory="connectionFactory" />

	<rabbit:admin connection-factory="connectionFactory" />

	<rabbit:queue name="queue.rpc.account" />

	<rabbit:listener-container
		connection-factory="connectionFactory">
		<rabbit:listener ref="rpcListener" 
			queue-names="queue.rpc.account"/>
	</rabbit:listener-container>
	{% endhighlight %}

**The Client**

	{% highlight xml %}
	<bean id="rpcProxy"
		class="org.springframework.amqp.remoting.client.AmqpProxyFactoryBean">
		<property name="amqpTemplate" ref="amqpTemplate"></property>
		<property name="serviceInterface"
			value="com.answer1991.rabbitmq.spring.rpc.AccountService"></property>
	</bean>

	<bean class="com.answer1991.rabbitmq.spring.rpc.AccountServiceClient">
		<property name="service" ref="rpcProxy"></property>
	</bean>

	<rabbit:connection-factory id="connectionFactory" />

	<rabbit:template id="amqpTemplate" connection-factory="connectionFactory" reply-timeout="2000"
		exchange="rpcExchange" routing-key="rpc.account" />

	<rabbit:admin connection-factory="connectionFactory" />

	<rabbit:queue name="queue.rpc.account" />

	<rabbit:direct-exchange name="rpcExchange">
		<rabbit:bindings>
			<rabbit:binding queue="queue.rpc.account" key="rpc.account" />
		</rabbit:bindings>
	</rabbit:direct-exchange>
	{% endhighlight %}