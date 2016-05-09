

### Basic Types

<table class="table table-bordered table-hover">
    <thead>
		<tr>
			<th>#</th>
			<th>Java Type (primitive)</th>
			<th>Hibernate Type (registy name)</th>
			<th>JDBC Type (comment)</th>
		</tr>
	</thead>
	<tbody>
		<!-- 1.String -->
		<tr>
			<td rowspan="3">1</td>
			<td rowspan="3">java.lang.String</td>
			<td>org.hibernate.type.String (string, java.lang.String)</td>
			<td>VARCHAR</td>
		</tr>
		<tr>
			<td>org.hibernate.type.MaterializedClob (materialized_clob)</td>
			<td>CLOB</td>
		</tr>
		<tr>
			<td>org.hibernate.type.TextType (text)</td>
			<td>LANGVARCHAR</td>
		</tr>
		
		<!-- 2.Character -->
		<tr>
			<td rowspan="1">2</td>
			<td rowspan="1">java.lang.Character (char)</td>
			<td>org.hibernate.type.CharacterType (char, java.lang.Character)</td>
			<td>CHAR</td>
		</tr>
		
		<!-- 3.Boolean -->
		<tr>
			<td rowspan="4">3</td>
			<td rowspan="4">java.lang.Boolean (boolean)</td>
			<td>org.hibernate.type.BooleanType (boolean, java.lang.Boolean)</td>
			<td>BIT</td>
		</tr>
		<tr>
			<td>org.hibernate.type.NumericBooleanType (numeric_boolean)</td>
			<td>INTEGER (0 = false, 1 = true)</td>
		</tr>
		<tr>
			<td>org.hibernate.type.YesNoType (yes_no)</td>
			<td>CHAR ('n'|'N' = false, 'y'|'Y' = true)</td>
		</tr>
		<tr>
			<td>org.hibernate.type.TrueFalseType (true_false)</td>
			<td>CHAR ('f'|'F' = false, 't'|'T' = true)</td>
		</tr>
		
		<!-- 4.Byte -->
		<tr>
			<td rowspan="1">4</td>
			<td rowspan="1">java.lang.Byte (byte)</td>
			<td>org.hibernate.type.ByteType (byte, java.lang.Byte)</td>
			<td>TINYINT</td>
		</tr>
		
		<!-- 5.Short -->
		<tr>
			<td>5</td>
			<td>java.lang.Short (short)</td>
			<td>org.hibernate.type.ShortType (short, java.lang.Short)</td>
			<td>SMALLINT</td>
		</tr>
		
		<!-- 6.Integer -->
		<tr>
			<td>6</td>
			<td>java.lang.Integer (int)</td>
			<td>org.hibernate.type.IntegerTypes (int, java.lang.Integer)</td>
			<td>INTEGER</td>
		</tr>
		
		<!-- 7.Long -->
		<tr>
			<td>7</td>
			<td>java.lang.Long (long)</td>
			<td>org.hibernate.type.LongType (long, java.lang.Long)</td>
			<td>BIGINT</td>
		</tr>
		
		<!-- 8.Long -->
		<tr>
			<td>8</td>
			<td>java.lang.Float (float)</td>
			<td>org.hibernate.type.FloatType (float, java.lang.Float)</td>
			<td>FLOAT</td>
		</tr>
		
		<!-- 9.Double -->
		<tr>
			<td>9</td>
			<td>java.lang.Double (double)</td>
			<td>org.hibernate.type.DoubleType (double, java.lang.Double)</td>
			<td>Double</td>
		</tr>
		
		<!-- 10.BigInteger -->
		<tr>
			<td>10</td>
			<td>java.math.BigInteger</td>
			<td>org.hibernate.type.BigIntegerType (big_integer, java.math.BigInteger)</td>
			<td>NUMERIC</td>
		</tr>
		
		<!-- 11.BigDecimal -->
		<tr>
			<td>11</td>
			<td>java.math.BigDecimal</td>
			<td>org.hibernate.type.BigBigDecimalType (big_decimal, java.math.BigDecimal)</td>
			<td>NUMERIC</td>
		</tr>
		
		<!-- 12.java.util.Date java.sql.Timestamp -->
		<tr>
			<td>12</td>
			<td>java.util.Date or java.sql.Timestamp</td>
			<td>org.hibernate.type.TimestampType (timestamp, java.util.Date, java.sql.Timestamp)</td>
			<td>TIMESTAMP</td>
		</tr>
		
		<!-- 13.java.sql.Time -->
		<tr>
			<td>13</td>
			<td>java.sql.Time</td>
			<td>org.hibernate.type.TimeType (time, java.sql.Time)</td>
			<td>TIME</td>
		</tr>
		
		<!-- 14.java.sql.Date -->
		<tr>
			<td>14</td>
			<td>java.sql.Date</td>
			<td>org.hibernate.type.DateType (date, java.sql.Date)</td>
			<td>DATE</td>
		</tr>
		
		<!-- 15.java.util.Calendar -->
		<tr>
			<td rowspan="2">15</td>
			<td rowspan="2">java.util.Calendar</td>
			<td>org.hibernate.type.CalendarType (calendar, java.util.Calendar, java.util.GregorianCalendar)</td>
			<td>TIMESTAMP</td>
		</tr>
		<tr>
			<td>org.hibernate.type.CalendarDateType (calendar_date)</td>
			<td>DATE</td>
		</tr>
		
		<!-- 16.java.util.Currency -->
		<tr>
			<td>16</td>
			<td>java.util.Currency</td>
			<td>org.hibernate.type.CurrencyType (currency, java.util.Currency)</td>
			<td>VARCHAR (using currency code, ie. 人民币-> 'CNY')</td>
		</tr>
		
		<!-- 17.java.util.Locale -->
		<tr>
			<td>17</td>
			<td>java.util.Locale</td>
			<td>org.hibernate.type.LocaleType (locale, java.util.Locale)</td>
			<td>VARCHAR (using locale code, ie. 中华人民共和国-> 'zh_CN')</td>
		</tr>
		
		<!-- 18.java.util.TimeZone -->
		<tr>
			<td>18</td>
			<td>java.util.TimeZone</td>
			<td>org.hibernate.type.TimeZoneType (timezone, java.util.TimeZone)</td>
			<td>VARCHAR (using timezone id, ie. 上海-> 'Asia/Shanghai')</td>
		</tr>
		
		<!-- 19.java.net.URL -->
		<tr>
			<td>19</td>
			<td>java.net.URL</td>
			<td>org.hibernate.type.UrlType (url, java.net.URL)</td>
			<td>VARCHAR (using the external form)</td>
		</tr>
		
		<!-- 20.java.lang.Class -->
		<tr>
			<td>20</td>
			<td>java.lang.Class</td>
			<td>org.hibernate.type.ClassType (class, java.lang.Class)</td>
			<td>VARCHAR (using class name)</td>
		</tr>
		
		<!-- 21.java.sql.Blob -->
		<tr>
			<td>21</td>
			<td>java.sql.Blob</td>
			<td>org.hibernate.type.BlobType (blob, java.sql.Blob)</td>
			<td>BLOB</td>
		</tr>
		
		<!-- 22.java.sql.Clob -->
		<tr>
			<td>22</td>
			<td>java.sql.Clob</td>
			<td>org.hibernate.type.ClobType (clob, java.sql.Clob)</td>
			<td>CLOB</td>
		</tr>
		
		<!-- 23.byte[] -->
		<tr>
			<td rowspan="3">23</td>
			<td rowspan="3">byte[]</td>
			<td>org.hibernate.type.BinaryType (binary, byte[])</td>
			<td>VARBINARY</td>
		</tr>
		<tr>
			<td>org.hibernate.type.MaterializedBlobType (materialized_blob)</td>
			<td>BLOB</td>
		</tr>
		<tr>
			<td>org.hibernate.type.ImageType (image)</td>
			<td>LONGVARBINARY</td>
		</tr>
		
		<!-- 24.Byte[] -->
		<tr>
			<td>24</td>
			<td>Byte[]</td>
			<td>org.hibernate.type.BinaryType (wrapper-binary, Byte[], java.lang.Byte[])</td>
			<td>VARBINARY</td>
		</tr>
		
		<!-- 25.char[] -->
		<tr>
			<td>25</td>
			<td>char[]</td>
			<td>org.hibernate.type.CharArrayType (characters, char[])</td>
			<td>VARCHAR</td>
		</tr>
		
		<!-- 26.Character[] -->
		<tr>
			<td>26</td>
			<td>Character[]</td>
			<td>org.hibernate.type.CharacterArrayType (warpper-characters, Character[], java.lang.Character[])</td>
			<td>VARCHAR</td>
		</tr>
		
		<!-- 27.java.util.UUID -->
		<tr>
			<td rowspan="3">27</td>
			<td rowspan="3">java.util.UUID</td>
			<td>org.hibernate.type.UUIDBinaryType (uuid-binary, java.util.UUID)</td>
			<td>BINARY</td>
		</tr>
		<tr>
			<td>org.hibernate.type.UUIDCharType (uuid-char)</td>
			<td>CHAR (though VARCHAR is fine too for existing schemas)</td>
		</tr>
		<tr>
			<td>org.hibernate.type.PostgresUUIDType (pg-uuid)</td>
			<td>(through Types#OTHER which is how the PostgreSQL JDBC driver defines it)</td>
		</tr>
		
		<!-- 28.java.io.Serializable -->
		<tr>
			<td>28</td>
			<td>java.io.Serializable</td>
			<td>org.hibernate.type.SerializableType</td>
			<td>VARBINARY</td>
		</tr>
	</tbody>
</table>

### How to mapping

ie. map org.hibernate.type.YesNoType to java.lang.Boolean

	{% highlight java %}
	//using type java name
	@Type(type = "org.hibernate.type.YesNoType")
	public Boolean getTestBoolean() {
		return testBoolean;
	}
	{% endhighlight %}

**or**

	{% highlight java %}
	//using registy name
	@Type(type = "yes_no")
	public Boolean getTestBoolean() {
		return testBoolean;
	}
	{% endhighlight %}


The DDL using *hbm2ddl*

> create table xxx (   
>       ...   
>        testBoolean char(1),   
>	    ...   
>       primary key (id)   
>	)