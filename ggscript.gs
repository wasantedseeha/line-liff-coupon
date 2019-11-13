function doGet(e) {
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1R0_zs--------------OumGBUA/edit");
  var sheet = ss.getSheetByName("data");
  var data = e.parameter.value;
  var ndata = e.parameter.name;
  var code = sheet.getRange(2, 1, sheet.getLastRow(),sheet.getLastColumn()).getValues();
  for(var i = 0;i<code.length; i++){
      if(data == code[i][0]){
        var status = sheet.getRange(i+2,7).getValue();
        var desc = sheet.getRange(i+2,3).getValue();
        if(status == "TRUE"){
        sheet.getRange(i+2,4).setValue('="FALSE"');
        sheet.getRange(i+2,9).setValue(ndata);
          var result = {"xstatus": "ใช้งานโค๊ดสำเร็จ","desc": desc};
        var founded = true;
        }
        else{
        var founded = true;
        var usedcode = sheet.getRange(i+2,6).getValue();
        var expcode = sheet.getRange(i+2,2).getValue();
        var namecode = sheet.getRange(i+2,9).getValue();
          if(usedcode == "FALSE"){
          var result = {"xstatus": "โค๊ดหมดอายุแล้ว","desc": "หมดอายุ : "+expcode};
          }else{
          var result = {"xstatus": "โค๊ดถูกใช้งานแล้ว","desc": "ใช้โดย : "+namecode};
          }
        }
        }
  }
          if(!founded){
        var result = {"xstatus": "โค๊ดไม่ถูกต้อง","desc": ""};
        }
  return ContentService.createTextOutput(JSON.stringify(result) ).setMimeType(ContentService.MimeType.JSON); 
}
