

#### 特殊字符转换
可以在Markdown中直接写特殊HTML符号，如&，>，<。Markdown会自动转换。

如果Markdown的标记与要输入的字符一样，在字符之前加入反斜杠。

---

#### 段落
分割两个段落，如p与p，p与ul，在两个段落之间加入一个空行。

---

#### 换行
在字符串后面加入两个空格和一个回车，相当于在一个段落（p标签或者其它段落标签）里加入(br标签)

---

#### 标题(h1, h2, h3...)
**#代表h1**   
**##代表h2**

以此类推

---

#### 区块引用(blockquote)
在每行之前加入>，每行不是必须，为了美观。  

区块引用里面能嵌套Markdown语法，如再加入>，嵌入h1等等

---

#### 无须列表
在每行(每个li)之前加入\*, \-, \+都可以。  

可以在列表加入子列表，用不同的标记符。  
**如：**

    + 外层无序列表元素1
     - 内层无序列表元素1
     - 内层无序列表元素2
     - 内层无序列表元素3
    + 外层无序列表元素2
    + 外层无序列表元素3

**效果:**

+ 外层无序列表元素1
	* 内层无序列表元素1
	* 内层无序列表元素2
	* 内层无序列表元素3
+ 外层无序列表元素2
+ 外层无序列表元素3

---

#### 有序列表
在每行前加入数字,数字并不会对顺序产生影响，可以随意加入数字。  

如果在有序列表里面嵌入有序列表，每一层使用不同的数字。  
**如：** 

    1. 外层的有序列表1
        2. 里层有序列表元素1
        2. 里层有序列表元素2
    1. 外层的有序列表2
    1. 外层的有序列表3

**效果：**

1. 外层的有序列表1
    2. 里层有序列表元素1
    2. 里层有序列表元素2
1. 外层的有序列表2
1. 外层的有序列表3

---

#### 代码区块
缩进4个空格或者使用制表符。

---

#### 分割线
使用3个以上的\*或者-。

---

#### 超链接
**行内式：** 

    [要显示的文字](URL "Title")  
    [Google](http://google.com "go to Google")

**效果：**
[Google](http://google.com "go to Google")

**参考式：**

    [要显示的文字][id]  
    再在文档的任意处（最好是尾部）加入 \[id]: URL "Title"  
    [Google][google]
    [google]: http://google.com "go to Google"

**效果：**
[Google][google]

**URL可以使用相对地址**

    [go to 404 of my blog][404]
    [404]: /goToUnknownPage "404"
    
**效果：**
[go to 404 of my blog][404]

---

#### 图片
**行内式：** 

    ![Alt Text](PIC URL "Title")
    ![My Icon](http://pic.yupoo.com/answer1991/CtZGHB78/mmHe8.jpg "My Icon")

**效果：**
![My Icon](http://pic.yupoo.com/answer1991/CtZGHB78/mmHe8.jpg "My Icon")

**参考式：**

    ![Alt Text][id]  
    再在文档的任意处（最好是尾部）加入 \[id]: PIC URL "Title"  
    ![My Icon][myIcon]
    [myIcon]: http://pic.yupoo.com/answer1991/CtZGHB78/mmHe8.jpg "My Icon"

**效果：**
![My Icon][myIcon]

**PIC URL可以使用相对地址**

---

#### 强调
使用一个\*或者\_包围的文字，能被em元素包围。  
使用两个\*或者\_包围的文字，能被strong元素包围。

*我是被em包围的*

**我是被strong包围的**

---

#### 行间代码区域
    使用`将代码区域包围；  
    如果在代码区域里面已经存在`，使用多个`将代码区包围。  
**效果**

you will see some code `printf()` in this line.

---

#### 反斜杠
Markdown 支持以下这些符号前面加上反斜杠来帮助插入普通的符号：

	\   反斜线
	`   反引号
	*   星号
	_   底线
	{}  花括号
	[]  方括号
	()  括弧
	#   井字号
	+   加号
	-   减号
	.   英文句点
	!   惊叹号

---

[google]: http://google.com "go to Google"
[404]: /goToUnknownPage "404"
[myIcon]: http://pic.yupoo.com/answer1991/CtZGHB78/mmHe8.jpg "My Icon"