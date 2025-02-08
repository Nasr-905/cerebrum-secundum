1. Download Quran text file from [Tanzil.net](https://tanzil.net/download/) with ayat numbers
    

2. With Pause marks
    
3. With Sajda Signs
    
4. Without rub-el-hizb
    
5. With tatweel below superscript alefs
    
6. Without sequential tanweens
    

7. Copy entire text file and paste into spreadsheet
    
8. Delete bottom copyright information
    
9. Replace the bismillah before every ayah with bismillah ending with a backtick “`”
    
10. Find and replace all pause marks shown [here](https://tanzil.net/docs/Pause_marks) with: “`||”
    
11. At this stage you can add all kinds of data
    

12. Juz Data might be easier added at the end
    

13. Use the equation: =transpose(split(A1,"`",TRUE))
    
14. Data > Split text to columns using custom delimiter: “|”
    
15. Create a new column that shows surah and ayat number in one
    

16. =A1&”:”&B1
    

17. Use the following template to fill in empty surah and ayat information
    

18. [=ArrayFormula(if(row(B2:B)<=MATCH(2,1/(B:B<>""),1),lookup(row(A2:A),row(A2:A)/if(B2:B<>"",TRUE,FALSE),B2:B),))](https://infoinspired.com/google-docs/spreadsheet/fill-blank-cells-with-the-values-above/)
    

19. Add English translation in a new sheet
    
20. Data > Split text to columns using custom delimiter: “|”
    
21. Create a new column that shows surah and ayat number in one
    

22. =A1&”:”&B1
    

23. Add xml data
    

24. =IMPORTXML("https://tanzil.net/res/text/metadata/quran-data.xml", "//@index")
    
25. =IMPORTXML("https://tanzil.net/res/text/metadata/quran-data.xml", "//@name")
    
26. =IMPORTXML("https://tanzil.net/res/text/metadata/quran-data.xml", "//@tname")
    
27. =IMPORTXML("https://tanzil.net/res/text/metadata/quran-data.xml", "//@ename")
    
28. =IMPORTXML("https://tanzil.net/res/text/metadata/quran-data.xml", "//@type")
    
29. =IMPORTXML("https://tanzil.net/res/text/metadata/quran-data.xml", "//@order")
    
30.   
    

31. =IMPORTXML("https://tanzil.net/res/text/metadata/quran-data.xml", "/quran/juzs/juz/@index")
    
32. =IMPORTXML("https://tanzil.net/res/text/metadata/quran-data.xml", "/quran/hizbs/quarter/@index")
    
33. =IMPORTXML("https://tanzil.net/res/text/metadata/quran-data.xml", "/quran/manzils/manzil/@index")
    
34. =IMPORTXML("https://tanzil.net/res/text/metadata/quran-data.xml", "/quran/rukus/ruku/@index")
    
35. =IMPORTXML("https://tanzil.net/res/text/metadata/quran-data.xml", "/quran/pages/page/@index")
    

  

36. =ArrayFormula(if(row(AC2:AC)<=MATCH(2,1/(AC:AC<>""),1),lookup(row(AA2:AA),row(AA2:AA)/if(AC2:AC<>"",TRUE,FALSE),AC2:AC),))
    

  

37. =ArrayFormula(if(row(AE2:AE)<=MATCH(2,1/(AE:AE<>""),1),lookup(row(AD2:AD),row(AD2:AD)/if(AE2:AE<>"",TRUE,FALSE),AE2:AE),))
    

  

38. ="Juz_"&D2&"::"&F2&"::"&"Aya_"&K2&" "&C2&" "&H2&" "&"Revelation_"&I2&" "&"Page_"&B2
    

  

39. Download Quran text file from [Tanzil.net](https://tanzil.net/download/) with ayat numbers
    

40. With Pause marks
    
41. With Sajda Signs
    
42. Without rub-el-hizb
    
43. With tatweel below superscript alefs
    
44. Without sequential tanweens
    

45. Copy entire text file and paste into spreadsheet
    
46. Delete bottom copyright information
    
47. Replace the bismillah before every ayah with bismillah ending with a backtick “`”
    
48. Find and replace all pause marks shown [here](https://tanzil.net/docs/Pause_marks) with: “`||”
    
49. At this stage you can add all kinds of data
    

50. Juz Data might be easier added at the end
    

51. Add English translation to the left of the Arabic Verses
    
52. Merge the translation so it comes before the ayah number and add a “|”
    

53. In C1: =A1&”|”&B1
    
54. Drag to the end
    

55. Now it should be: {translation}|{surah#}|{ayat#}|{bismilah}`{ayat}
    
56. Use the equation: =transpose(split(A1,"`",TRUE))
    
57. Data > Split text to columns using custom delimiter: “|”
    
58. Use the following template to fill in empty surah and ayat information
    

59. [=ArrayFormula(if(row(B2:B)<=MATCH(2,1/(B:B<>""),1),lookup(row(A2:A),row(A2:A)/if(B2:B<>"",TRUE,FALSE),B2:B),))](https://infoinspired.com/google-docs/spreadsheet/fill-blank-cells-with-the-values-above/)
    

  

60. Download Quran text file from [Tanzil.net](https://tanzil.net/download/) with ayat numbers
    

61. With Pause marks
    
62. With Sajda Signs
    
63. Without rub-el-hizb
    
64. With tatweel below superscript alefs
    
65. Without sequential tanweens
    

66. Copy entire text file and paste into spreadsheet
    
67. Delete bottom copyright information
    
68. Replace the bismillah before every ayah with bismillah ending with a backtick “`”
    
69. Data > Split text to columns using custom delimiter: “|”
    
70. Use the equation: =split(A1,"|` ۚ ۗ ۘ",TRUE)
    
71. =split(A1," | `  ۚ  ۗ  ۘ ",TRUE)
    
72. Use the equation =$A1&”|“&$B1&"|"&C1
    

73. Only if the C1 is not empty
    
74. =IF(C1<>"",CONCATENATE($A1,"|",$B2,"|",C1),"")
    

75. Merge all cells in a row using the equation: =CONCATENATE(A2,"`", B2,"`",C2…)
    

76. Make sure to use backticks
    

77. =transpose(split(A1,"`”,TRUE))
    
78. Data > Split text to columns using custom delimiter: “|”
    

  
  

79. Find and replace all pause marks shown [here](https://tanzil.net/docs/Pause_marks) with a backtick: “`”
    
80. Data > Split text to columns using custom delimiter: “`”
    

  
  

Use pause marks shown [here](https://tanzil.net/docs/Pause_marks) and use the following equation to split

=transpose(split(A1,"` ۚ ۗ ۘ",TRUE))

Regarding the Interchangeable pause, change one of them to a backtick ‘`’ to act as a delimiter

  

=INDEX(MyData,1+INT((ROW(C1)-1)/COLUMNS(MyData)),MOD(ROW(C1)-1+COLUMNS(MyData),COLUMNS(MyData))+1)

  

In column D1: “=”`”&”C1”

Or maybe you want to use concat/concatenate, either way, the backtick should be the start.

  
  

function SPLIT() {

var ss = SpreadsheetApp.getActiveSpreadsheet();

var sh0 = ss.getSheets()[0], sh1 = ss.getSheets()[1];

// get data from sheet 1

var data = sh0.getDataRange().getValues();

// create array to hold data

var aMain = new Array();

// itterate through data and add to array

for(var i=1, dLen=data.length; i<dLen; i++) {

  for(var j=12; j<29; j++) {

    aMain.push([data[i][0],data[i][1],data[i][2],data[i][3],data[i][4],data[i][5],data[i][6],data[i][7],data[i][8],data[i][9],data[i][10],data[i][11],data[i][j],data[i][30]]);

  }

}

// add array of data to second sheet

sh1.getRange(2, 1, aMain.length, 14).setValues(aMain);

}

  

  

Next Steps:

- Make a copy of sheet2, it will come in handy for sentence mining traditional arabic
    
- Use merge to add previous aya data
    
- Delete all rows with bismillah as quran text
    
- Lookup count 17
    

- =INDEX(K1:K16,MATCH(K17,K1:K16,0)0,2)
    
- =INDEX(K1:K16,MATCH(K17,K1:K16,0)0,2)
    
- =INDEX(K1:K16,16,2)
    
-   
    
- =IF(K1:K16=K17,M1:M17,""))
    
- =TEXTJOIN(" ",TRUE,IF(K1:K16=K17,M1:M17,""))
    
-   
    
- =TEXTJOIN(" ",TRUE,IF(K1:K16=K17,M1:M17,""))
    
- =ARRAYFORMULA(TEXTJOIN(" ",TRUE,IF(K720:K735=K736,M720:M735,"")))
    
-   
    

- All the ayas with bismillah 
    
- Split text of segments with bismillah into the next column 
    

  

Possible Issues:

- Double space for ayas that are not manzils (SOLVED)
    

  

=IF(REGEXMATCH(M1, ""), 1, 0)

  

=countif($P$2:$P$10522,P2)>1

  
  

="[sound:"&TEXT(I3,"000")&TEXT(J3,"000")&".mp3]"

  

=“[sound:“&text(F2,”00000”)                          &”.mp3]”

  

<span class="ayaNumber" style="font-size: 0.91em;">‎﴿٢﴾‏</span>

  

Do all the same things again but export it to excel and change all the numbers to arabic numbers. Reverse the numbers so that ١٠٩ becomes ٩٠١. Finally join the aya numbers with their ayas so that the aya numbers come first then a space and then the aya.

  

Optional stop Mishary ( ۛ ):

81. 2:2 - second
    
82. 2:195 - second
    
83. 5:26 - second
    
84. 5:41 - first
    
85. 7:172 - first
    
86. 14:9 - second
    

  

Counting number of words

- =IF(D1<>"",LEN(TRIM(D1))-LEN(SUBSTITUTE(D1," ",""))+1+U1,"")
    
- Remove the u1 for the cells in the row
    

  

Merging together word segment starts and stops

- =IF(D1<>"",IF(C1<>"",C1&":"&D1,"1:"&D1),"")
    

  

Sura|aya|segment_number|word_index_start|word_index_end

  

Check 36:52 api from quranwbw اۜۗ for compatibility with fonts.

  

Minor Audio Issues:

- Index
    

- Added words (negative for missing words) for segment 1
    

- 6:104
    
- 7:43
    

- 2 extra words at the end
    
- Missing 2 (technically 2) word at the start | 2 extra words at the end
    
- Segment 3 fine
    
- Segment 4 fine
    

- 5:4
    

- Segment 1 fine
    
- 1 extra word at the end
    
- 1 extra word at the end
    
- 2 words behind
    
- 2 words behind
    

- 2:20
    

- Segment 1 fine
    
- 1 extra word at the end
    
- Missing a word at the start
    
- Fine
    

- 4:39
    

- Missing 1  word at the end
    
- 1 extra word
    

- 7:38
    

- 1 extra word at the end
    

- 11:29
    

- Segment 1 fine
    
- 2 extra words
    
- Fine
    
- Fine
    

- 14:21
    

- Fine
    
- Missing 2 words at the end
    
- 2 words extra at the beginning
    

- 13:16
    

- 1 extra word
    
- Missing 1 in beginning, 1 extra at the end
    
- Same as above
    
- Missing at the start
    
- Missing a few seconds at the end? (may be a data issue)
    

- 12:59
    

- Missing a word
    
- 1 extra word at the start
    

- 13:11
    

- Fine
    
- Fine
    
- Missing a word at the end
    
- 1 extra word at the start; missing 1 at the end
    

- 13:31
    

- Fine
    
- Fine
    
- Missing one at the end
    
- 1 extra at the start
    

- 12:53
    

- 1 extra word
    
- Fine
    
- Fine
    

- 10:1
    

- 4 words extra at the end
    
- 4 words missing from the start
    

- You could rename the first one with the second one’s name and make a file with just the first word
    

- 20:71
    

- Fine
    
- Missing a word at the end
    
- 1 extra word at the start, missing one word at the end
    

- 33:35
    

- Beautiful aya!
    

- 50:34
    

- Entire aya: extra 3 words at the end
    
- Fine
    

- 65:11
    
-   
    

- 1 extra word at the end
    
- Fine
    
- Fine
    

- 61:14
    

- 1 extra word
    
- 2 extra words at the end
    
- Missing 2 words at the start