

<div id="accordion2">
	<!-- 第一天， 什么是类和对象，类定义，方法定义，执行，Car和Engine模型 -->
	<div class="accordion-group">
	  <div class="accordion-heading">
		<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#day1">
		  2012年12月4号
		</a>
	  </div>
	  <div id="day1" class="accordion-body in collapse" style="height: auto;">
		<div class="accordion-inner">
			<table class="table table-bordered table-hover">
				<thead>
					<tr>
						<th>#</th>
						<th>Training内容</th>
						<th>时长</th>
						<th>Training结果</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>面向对象编程思维讲解</td>
						<td>1h</td>
						<td>Julie听懂了讲解，但在后续的实践中使用依然有些混乱，需要多加练习</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Java的基本语法讲解，类，类中的属性，方法定义</td>
						<td>30min</td>
						<td>类、类的属性定义没什么问题，编写方法的时候总有问题。</td>
					</tr>
					<tr>
						<td>3</td>
						<td>讲解用Java抽象一个现实生活中的模型。Car和Engine(<a href="/tech/2013/12/06/Julies-Training-Code/#carEngine" target="_blank">查看代码</a>)，它们有一些简单的属性和方法。</td>
						<td>1h</td>
						<td>通过讲解，Julie基本能看明白我写的逻辑，但是在后面的实践中自己的思维比较混乱。</td>
					</tr>
					<tr>
						<td>4</td>
						<td>练习写Car和Engine模型。</td>
						<td>1.5h</td>
						<td>练习了两遍，第一遍需要我大量的指导，第二遍基本能独立完成。</td>
					</tr>
				</tbody>
			</table>
			<p class="well">
				总结： Julie基本没有编程基础，学习起来有点费劲。尽量从现实生活中抽象出来的模型着手，借助生活经验帮助理解编程思想。在练习中暴露出诸多问题，如不注意细节，不注意大小写区分；面向对象思维混乱，在执行的语句想要去定义方法。这些可能是新手习惯犯的毛病，需要多加练习。
			</p>
		</div>
	  </div>
	</div>
	
	<!-- 第二天， Service和Dao模型 -->
	<div class="accordion-group">
	  <div class="accordion-heading">
		<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#day2">
		  2012年12月5号
		</a>
	  </div>
	  <div id="day2" class="accordion-body collapse" style="height: 0px;">
		<div class="accordion-inner">
			<table class="table table-bordered table-hover">
				<thead>
					<tr>
						<th>#</th>
						<th>Training内容</th>
						<th>时长</th>
						<th>Training结果</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>复习前一天的内容，强化面向对象思想，方法定义。</td>
						<td>1h</td>
						<td>Julie基本理解了面向对象，理解了Car和Engine的依赖关系。</td>
					</tr>
					<tr>
						<td>2</td>
						<td>参照Car和Engine的模型，介绍一个简单的Service和Dao模型(<a href="/tech/2013/12/06/Julies-Training-Code/#serviceDao" target="_blank">查看代码</a>)</td>
						<td>1.5h</td>
						<td></td>
					</tr>
					<tr>
						<td>3</td>
						<td>练习编写Service和Dao</td>
						<td>1.5h</td>
						<td>在看完我编写之后，Julie基本能参照着Car和Engine编写。中途犯了前一天长犯的错误。</td>
					</tr>
				</tbody>
			</table>
			<p class="well">
				总结： Julie在前一天的基础上能够抽象出Service和Dao，但是在方法参数的定义和返回值的定义上还有点问题。对引用和对象的概念还比较混淆。
			</p>
		</div>
	  </div>
	</div>
	
	<!-- 第三天 -->
	<div class="accordion-group">
	  <div class="accordion-heading">
		<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#day3">
		  2012年12月6号
		</a>
	  </div>
	  <div id="day3" class="accordion-body collapse" style="height: 0px;">
		<div class="accordion-inner">
			<table class="table table-bordered table-hover">
				<thead>
					<tr>
						<th>#</th>
						<th>Training内容</th>
						<th>时长</th>
						<th>Training结果</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>介绍在Service里面增加简单的国际化功能（先直接想国际化功能写在Service里面）</td>
						<td>0.5h</td>
						<td>Julie基本理解了面向对象，理解了Car和Engine的依赖关系。</td>
					</tr>
					<tr>
						<td>2</td>
						<td>抽象出解决国际化功能的类</td>
						<td>1.5h</td>
						<td>在前几天反复讲解类的职责单一性后，Julie能自己发现应该将国际化的功能抽象出一个独立的模块去完成。</td>
					</tr>
					<tr>
						<td>3</td>
						<td>讲解接口和多态</td>
						<td>1.5h</td>
						<td>通过VoiceMaker接口，People和Dog实现这个接口的例子(<a href="/tech/2013/12/06/Julies-Training-Code/#voiceMaker" target="_blank">查看代码</a>)。Julie能理解接口的意义。</td>
					</tr>
					<tr>
						<td>4</td>
						<td>接口多态延伸，讲解Context Dependency Injection，Spring容器和AOP（只讲概念不讲实现）。帮助理解接口的重要性。</td>
						<td>0.5</td>
						<td>Julie能很好的明白为什么在引用中要使用接口，以及使用接口带来的好处和可扩展性。</td>
					</tr>
				</tbody>
			</table>
			<p class="well">
				总结： Julie今天的表现明显好于前两天。主动提出应该将国际化的功能抽象出独立的模块，这让我很欣慰。在实践方面依然不足，独立编写代码的时候比较缓慢。通过工厂制造Car和Engine的方法，帮助Julie理解Spring容器的意义。
			</p>
		</div>
	  </div>
	</div>
	
</div>