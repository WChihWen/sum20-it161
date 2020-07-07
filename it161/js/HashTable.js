 function Hashtable(){ 
     this.Clear = Hash_Clear; 
     this.ContainsKey = Hash_ContainsKey; 
     this.ContainsValue = Hash_ContainsValue; 
     this.Items = Hash_Items; 
     this.IEmpty = Hash_IsEmpty; 
     this.Keys = Hash_Keys; 
     this.Put = Hash_Put; 
     this.Remove = Hash_Remove; 
     this.Size = Hash_Size; 
     this.ToString = Hash_ToString; 
     this.Values = Hash_Values; 
     this.hashtable = new Array(); 
 }
    
 //清除所有選項 
 function Hash_Clear(){ 
     this.hashtable = new Array(); 
 } 
  
 //判斷某個key是否存在 
 function Hash_ContainsKey(key){ 
     var exists = false; 
     for (var i in this.hashtable) { 
         if (i == key && this.hashtable[i] != null) { 
             exists = true; 
             break; 
         } 
     } 
     return exists; 
 } 
  
 //判斷某個value是否存在 
 function Hash_ContainsValue(value){ 
     var contains = false; 
     if (value != null) { 
         for (var i in this.hashtable) { 
             if (this.hashtable[i] == value) { 
                 contains = true; 
                 break;  
             } 
         } 
     } 
     return contains; 
 } 
  
 //取得某個item 
 function Hash_Items(key){ 
     return this.hashtable[key]; 
 } 
  
 //判斷hash是否為空 
 function Hash_IsEmpty(){ 
     return (parseInt(this.size()) == 0) ? true : false; 
 } 
  
 //取得所有的key集合 
 function Hash_Keys(){ 
     var keys = new Array(); 
     for (var i in this.hashtable) { 
         if (this.hashtable[i] != null) 
             keys.push(i); 
     } 
     return keys; 
 } 
  
 //取得所有的value集合 
 function Hash_Values(){ 
     var values = new Array(); 
     for (var i in this.hashtable) { 
         if (this.hashtable[i] != null) 
             values.push(this.hashtable[i]); 
     } 
     return values; 
 } 
  
 //加入新的item 
 function Hash_Put(key, value){ 
     if (key == null || value == null) { 
         throw 'NullPointerException {"' + key + '"},{"' + value + '"}'; 
     }else{ 
         this.hashtable[key] = value; 
     } 
 } 
  
 //移除某個item 
 function Hash_Remove(key){ 
     var rtn = this.hashtable[key]; 
     this.hashtable[key] = null; 
     return rtn; 
 } 
  
 //取得目前hash的大小 
 function Hash_Size(){ 
     var size = 0; 
     for (var i in this.hashtable) { 
              if (this.hashtable[i] != null) 
             size ++; 
     } 
    return size; 
 } 
  
 //轉成{key},{value}的字串型態 
 function Hash_ToString(){ 
     var result = ""; 
     for (var i in this.hashtable) 
     {      
         if (this.hashtable[i] != null) 
             result += '{"\n"' + i + '},{' + this.hashtable[i] + '}';   
     } 
     return result; 
 }