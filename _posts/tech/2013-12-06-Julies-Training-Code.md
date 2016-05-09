

<p id="carEngine" class="alert alert-success">Car和Engine的例子</p>

	{% highlight java %}
	package com.julie.day1.training;
	
	/**
	 * 1. 有color属性, 类型是String 
	 * 2. 有name属性 , 类型是String 
	 * 3. 有engine属性，类型是Engine 
	 * 4. 这些属性都是private的，但是提供public的访问和赋值方法
	 * 5. 有run方法， 方法里先执行engine的start方法,然后打印出“我启动了”。
	 */
	public class Car {
		private String color;
		private String name;
		private Engine engine;
		
		public String getColor(){
			return color;
		}
		public void setColor(String color){
			this.color = color;
		}
		
		public String getName(){
			return name;
		}
		public void setName(String name){
			this.name = name;
		}
		
		public Engine getEngine(){
			return engine;
		}
		public void setEngine(Engine engine){
			this.engine = engine;
		}
		public void run(){
			engine.start();
			System.out.println("我启动了！");
		}
			
	}
	
	package com.julie.day1.training;
	/**
	 * 1. 有name属性 , 类型是String 
	 * 2. 属性都是private的，提供public的访问和修改方法 
	 * 3. 有start方法，打印出"engine " + name + " start"
	 */
	public class Engine {
		private String name;
		public String getName(){
			return name;
		}
		public void setName(String name){
			this.name = name;
		}
		public void start(){
			System.out.println("engine" + name +"start");
		}
	}
	
	package com.julie.day1.training;

	/**
	 * 1. 生成名为benz的Car对象，设置color为black, name为benzCar，装配name属性为BenzEngine的Engine对象。
	 * 2. 执行benz的run方法 
	 * 3. benz的engine坏了，需要换一个新的，name为BmwEngine的Engine 
	 * 4. 再执行benz的run方法
	 */
	public class Client {

		public static void main(String[] args) {
			Car benz = new Car();
			
			benz.setColor("black");
			benz.setName("benzCar");

			Engine engine = new Engine();
			
			benz.setEngine(engine);
			engine.setName("BenzEngine");

			benz.run();

			engine.setName("BmwEngine");
			benz.run();

		}
	}
	{% endhighlight %}

<p id="serviceDao" class="alert alert-success">Service和Dao的例子，Dao只是简单模拟一下查数据操作。</p>

	{% highlight java %}
	package com.julie.day2;
	
	public class Service {
		private Dao dao;
		private I18NResolver i18nResolver;
		
		public I18NResolver getI18NResolver(){
			return i18nResolver;
		}
		
		public void setI18NResolver(I18NResolver i18nResolver){
			this.i18nResolver = i18nResolver;
		}
		
		public Dao getDao(){
			return dao;
		}
		
		public void setDao(Dao dao){
			this.dao = dao;
		}
		
		@Override
		public String queryOrderStatusById(String id, String targetLanguage){
			String result;
			
			String prefix = null;
			String resultAfterTranslated = null;
			String isArrived = dao.queryFromDB(id);
			prefix = i18nResolver.getPrefix(targetLanguage);
			resultAfterTranslated = i18nResolver.translateArriveStatus(targetLanguage, isArrived);
			
			result = id + prefix + resultAfterTranslated;
			
			return result;
		}
		
	}
	
	package com.julie.day2;
	
	public class Dao {
		public String queryFromDB(String id) {
			String returnResult;

			if (id.equals("1")) {
				returnResult = "arrived";
			} else {
				returnResult = "not arrived";
			}

			return returnResult;
		}
	}
	
	package com.julie.day2;
	
	public class I18NResolver {
		/**
		public String translate(String targetLanguage, String word){
			
		}
		**/
		
		public String translateArriveStatus(String targetLanguage, String isArrived) {
			String resultAfterTranslated;
			
			if (targetLanguage.equals("cn")){
				if (isArrived.equals("arrived")){
					resultAfterTranslated = "到达";
				}
				else {
					resultAfterTranslated = "没到达";
				}
			}
			else {
				resultAfterTranslated = isArrived;
			}

			return resultAfterTranslated;
		}
		
		public String getPrefix(String targetLanguage) {
			String prefix;
			
			if(targetLanguage.equals("cn")) {
				prefix = "订单状态是";
			}
			else {
				prefix = " order status is ";
			}
			
			return prefix;
		}
	}
	
	package com.julie.day2;
	
	public class Client {
		
		public static void main(String[] arsg){
			Service service = new Service();
			Dao dao = new Dao();
			I18NResolver i18nResolver = new I18NResolver();
			
			service.setDao(dao);
			service.setI18NResolver(i18nResolver);
			
			String result = service.queryOrderStatusById("1", "cn");
			
			System.out.println(result);
			
		}

	}
	{% endhighlight %}

<p id="voiceMaker" class="alert alert-success">VoiceMaker, People, Dog</p>

	{% highlight java %}
	package com.julie.day3;

	public interface VoiceMaker {
		public abstract void makeVoice();
	}

	
	package com.julie.day3;

	public class People implements VoiceMaker {
		@Override
		public void makeVoice() {
			System.out.println("我在说话");
		}
	}
	
	package com.julie.day3;

	public class Dog implements VoiceMaker {
		@Override
		public void makeVoice() {
			System.out.println("汪汪");
		}
	}
	
	package com.julie.day3;

	public class MusicPlayGround {
		private VoiceMaker voiceMaker;

		public VoiceMaker getVoiceMaker() {
			return voiceMaker;
		}

		public void setVoiceMaker(VoiceMaker voiceMaker) {
			this.voiceMaker = voiceMaker;
		}
		
		public void play() {
			voiceMaker.makeVoice();
		}
	}
	
	package com.julie.day3;

	public class Client {
		public static void main(String[] args) {
			MusicPlayGround ground = new MusicPlayGround();
			VoiceMaker voiceMaker = new Dog();
			
			ground.setVoiceMaker(voiceMaker);
			
			ground.play();
		}
	}
	{% endhighlight %}
