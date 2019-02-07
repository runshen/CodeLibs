function fillInBlanks() {
    var content0 = document.getElementsByTagName('p')[0].innerHTML;
    var content1 = document.getElementsByTagName('p')[1].innerHTML;
    var content2 = document.getElementsByTagName('p')[2].innerHTML;
    var content3 = document.getElementsByTagName('p')[3].innerHTML;
    var content4 = document.getElementsByTagName('p')[4].innerHTML;
    var content5 = document.getElementsByTagName('p')[5].innerHTML;
    var content6 = document.getElementsByTagName('p')[6].innerHTML;
    var content7 = document.getElementsByTagName('p')[7].innerHTML;
    var content8 = document.getElementsByTagName('p')[8].innerHTML;
    var content9 = document.getElementsByTagName('p')[9].innerHTML;
    
    document.getElementsByClassName("blank")[0].innerHTML = content0;
    document.getElementsByClassName("blank")[1].innerHTML = content1;
    document.getElementsByClassName("blank")[2].innerHTML = content2;
    document.getElementsByClassName("blank")[3].innerHTML = content3;
    document.getElementsByClassName("blank")[4].innerHTML = content4;
    document.getElementsByClassName("blank")[5].innerHTML = content2;
    document.getElementsByClassName("blank")[6].innerHTML = content5;
    document.getElementsByClassName("blank")[7].innerHTML = content6;
    document.getElementsByClassName("blank")[8].innerHTML = content7;
    document.getElementsByClassName("blank")[9].innerHTML = content8;
    document.getElementsByClassName("blank")[10].innerHTML = content9;
}