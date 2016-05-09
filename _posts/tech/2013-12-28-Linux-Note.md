

#### Linux的设备操作

Linux常见文件类型(映射在/proc/filesystems)：

<table class="table table-bordered table-hover">
	<thead>
		<tr>
			<th>文件系统类型</th>
			<th>备注</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>msdos</td>
			<td>DOS文件系统类型</td>
		</tr>
		<tr>
			<td>vfat</td>
			<td>支持长文件名的DOS文件系统类型，也可以理解为Windows文件类型</td>
		</tr>
		<tr>
			<td>iso9660</td>
			<td>光盘格式文件类型</td>
		</tr>
		<tr>
			<td>ext2/ext3</td>
			<td>Linux下的文件系统类型</td>
		</tr>
	</tbody>
</table>

Linux挂载设备：

	mount -t 文件系统类型 设备名 挂载名

Linux挂载软盘

	mount -t msdos /dev/fd0 /mnt/floppy

设备的卸载:

	umount 挂载目录

卸载软盘：

	umount /mnt/floppy
	
<div class="alert alert-warning">
	<p>注意，用mount命令挂载的是软盘、光盘和U盘，而不是软驱和光驱。当需要更换软盘时，需要先卸载再装载。</p>
</div>

#### Linux文件系统

很多Linux发行版目录结构布局都遵循FSSTND标准。

#### 系统核心组成

一个完整的Linux内核一般由5个部分组成，它们分别是内存管理，进程管理，进程间通信，虚拟文件系统和网络接口。