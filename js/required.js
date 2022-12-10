//----------------ДОКУМЕНТАЦИЯ-------------
//https://jqueryvalidation.org/documentation/


$(document).ready(function(){
  // $("#frm").validate( {  
  //     ignore: '*:not([name])', //Fixes your name issue
  //     rules : {  
  //         empName : "required"  
  //     },
  //     messages: {
  //         empName: {
  //             required: "Please enter name"
  //         }
  //     }  
  // });  

  // $("#saveB").click(function(){
  //     $("#frm").submit();    
  // });  
  
  jQuery.validator.setDefaults({
    debug: false,
    success: "valid",
  });
  let callback_one = $("#callback__form_1").validate({//---ОКНО--------ОБРАТНЫЙ ЗВОНОК
    rules: {
      callback_name: {
        required: true,
      },
      callback_number: {
        required: true,
        number: true,
      },
    },
  });
  
  
  //-----ОКНО---------ЗАДАТЬ ВОПРОС--------

  $("#callback__form_2").validate({
    rules: {
      callback_name: {
        required: true,
      },
      callback_number: {
        required: true,
        number: true,
      },
      text_question: {
        required: true,
      },
    },
  });
  
  //--------СТРАНИЦА--------УЧЕБНЫЕ ЦЕНТРЫ

  $("#first_form").validate({
    rules: {
      surname: "required",
      name: "required",
      lastname: "required",
      date: {
        required: true,
        date: true,
      },
      num: {
        required: true,
        number: true,
      },
      adress: "required",
      cours: "required",
      center: "required",
      done: "required",
      check: "required",
    },
  });
  
  //---------СТРАНИЦА----ЗАЯВКИ---

  $("#request_form").validate({
    rules: {
      surname: {
          required: true
        },
      name: {
          required: true,
        },
      lastname: {
          required: true,
        },
      date: {
          required: true,
          date: true
        },
      gender: {
        required: true,
      },
      country: {
          required: true,
        },
      region: {
          required: true,
        },
      city: {
          required: true,
        },
      adress: {
          required: true,
        },
      citizenship: {
          required: true,
        },
      seriaPasport: {
          required: true,
        },
      copyPasport: {
          required: true,
          accept: "image/*"
        },
      copyPasportTwo: {
          required: true,
          accept: "image/*"
        },
      adress_two: {
          required: true,
        },
      number: {
        required: true,
        number: true,
      },
      numberTwo: {
        required: true,
        number: true,
      },
      email: {
        required: true,
        email: true,
      },
      studies: {
          required: true,
        },
      nameStudies: {
          required: true,
        },
      countStudies: {
          required: true,
        },
      regionStudies: {
          required: true,
        },
      yearStudies: {
        required: true,
      },
      diplomSeria: {
          required: true,
          accept: "image/*"
        },
        diplomCopy: {
          required: true,
          accept: "image/*"
        },
      sertifikat: {
          required: true,
        },
      ball: {
        required: true,
        number: true,
      },
      numberSertifikat: {
          required: true,
        },
      copySertifikat: {
          required: true,
        },
      direction: {
          required: true,
        },
      hostel: {
          required: true,
        },
      acquainted: {
          required: true,
        },
      
      citizenship: {
          required: true,
        },
    },
  });
  
});
