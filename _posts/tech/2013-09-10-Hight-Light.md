

首先设置_conifg.yml中的pygments为true。

然后在代码块最前面前加入
> \{\% highlight 语言名 \%\}

代码块结束末尾加入
> \{\% endhighlight \%\}

**去掉反斜杠**

**效果:**

	{% highlight java %}
	public class HelloWorld {
		public static void main(String args[]) {
			System.out.println("Hello World!");
		}
	}
	{% endhighlight %}
