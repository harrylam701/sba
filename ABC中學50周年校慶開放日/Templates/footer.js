function copytel() {
    navigator.clipboard.writeText("12345678");
    alert("Telephone number is copied!");
}

function copyfex() {
    navigator.clipboard.writeText("12345678");
    alert("Fax number is copied!");
}

function copyemail() {
    navigator.clipboard.writeText("mail@abc.edu.hk");
    alert("Email address is copied!");
}
document.write(`

<a href="index.html" target="_self">主頁</a>
<p>ABC中學</p>
<p>ABC Secondary School</p>
<p>地址 : 屯門湖昌街3號</p>
<p> 電話(Tel): 12345678<img src="source/svg/copy_icon.svg" width="22" height="20" alt="copy icon"onclick="copytel()" /> 
傳真(Fax): 12345678<img src="source/svg/copy_icon.svg" width="22" height="20" alt="copy icon" onclick="copyfex()"/>
電郵(Email): mail@abc.edu.hk <img src="source/svg/copy_icon.svg" width="22" height="20" alt="copy icon" onclick="copyemail"/>
</p>
<p>
<table style="width:20%">
	<tr>
		<td colspan="2" align="leftt"><a href="index.html" target="_self">主頁</a></td>
	</tr>
	<tr>
		<td align="left"><a href="Subject_Activities.html" target="_self">科目活動</a></td>
	    <td align="left"><a href="Student_Experience.html" target="_self">學生經歷</a></td>
	</tr>
	<tr>
		<td align="left"><a href="map.html" target="_self">舉辦地點</a></td>
	    <td align="left"><a href="questionnaire.html" target="_self">問卷</a></td>
	</tr>
</table>
</p>

`);