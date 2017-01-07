<?php
	$carpeta = $_POST['carpeta'];
	$dir = "./"."img"."/".$carpeta.'/';
	$fi = new FilesystemIterator($dir, FilesystemIterator::SKIP_DOTS);
	echo iterator_count($fi);
?>