$(function (){
	$("form").submit(function( ) {

		let segmentContact = {
	        name   : $('#contact').find('.firstname').val() + " "  + $('#contact').find('.lastname').val(),
	        address: ($('#contact').find('.address').val() || '') + ", " + ($('#contact').find('.city').val() || '') + ", " + ($('#contact').find('state').val() || '') + " " + ($('#contact').find('zipcode').val() || ''),
	        reach  : [
	            $('#contact').find('email').val() || '',
	            $('#contact').find('phone').val() || '',
	            ''
	        ]
		}
		let segmentEducation = {
	        title: "",
	        items: []
	    }
	    let segmentProfExp = {
	        title: "",
	        items: []
	    }
	    let segmentExtracur = {
	        title: "",
	        items: []
	    }
	    let segmentSkills = {
	        title: "",
	        items: []
	    }

		// //create the employer part of schema
	 //    for(let i = 1; i < $('.employer').length; i++){
	 //    	if (i === 1) {
	 //    		segmentProfExp.title = 'PROFESSIONAL EXPERIENCE';
	 //    	}
	 //    	let employer = '#employer' + String(i);
	 //    	let start    = dateChanger($(employer).find('.employerMonthStart').val());
	 //    	let end      = dateChanger($(employer).find('.employerMonthEnd').val());

	 //    	let employee = {
  //               city      : $(employer).find('.employerCity').val(),
  //               state     : $(employer).find('.employerState').val(),
  //               start_date: start,
  //               end_date  : end,
  //               lines: [
  //                   {
  //                       title  : $(employer).find('.employerInput').val(),
  //                       content: '',
  //                   },
  //                   {
  //                       italics: true,
  //                       content: $(employer).find('.employerTitle').val()
  //                   }
  //               ]
	 //    	};

	   	// 	//Get job desription items
	    // 	for (let j = 1; j < 6; j++) {
	    // 		if ($(desc).find("[name='jobcontent']").val()) {
		   //  		let desc = '#cloneId' + String.fromCharCode(97 + i) + String(j);
		   //  		employee.lines.push({bullet: true, content: $(desc).find("[name='jobcontent']").val()});
		   //  	}

	    // 	}
	    // 	segmentProfExp.items.push(employee);
	    // }




		// // Cloned variables
		// var uniAwardStr = '';
		// for (let i = 1; i < $("[data-clone='award']").length + 1; i++){
		// 	if ($("#award" + i).find('.awardInput').val() !== ''){
		// 		if (i > 1){
		// 			uniAwardStr += ', ';
		// 		}
		// 		uniAwardStr += $("#award" + i).find('.awardInput').val();
		// 	}
		// }

		// var uniCourseStr = '';
		// for (let i = 1; i < $("[data-clone='course']").length + 1; i++){
		// 	if ($("#course" + i).find('.courseInput').val() !== ''){
		// 		if (i > 1){
		// 			uniCourseStr += ', ';
		// 		}
		// 		uniCourseStr += $("#course" + i).find('.courseInput').val();
		// 	}
		// }

		// var hsAwardStr = '';
		// for (let i = 1; i < $("[data-clone='hsaward']").length + 1; i++){
		// 	if ($("#hsaward" + i).find('.hsawardInput').val() !== ''){
		// 		if (i > 1){
		// 			hsAwardStr += ', ';
		// 		}
		// 		hsAwardStr += $("#hsaward" + i).find('.hsawardInput').val();
		// 	}
		// }

		// const monthDict = {
		// 	'01' : 'January',
		// 	'02' : 'Febuary',
		// 	'03' : 'March',
		// 	'04' : 'April',
		// 	'05' : 'May',
		// 	'06' : 'June',
		// 	'07' : 'July',
		// 	'08' : 'August',
		// 	'09' : 'September',
		// 	'10' : 'October',
		// 	'11' : 'November',
		// 	'12' : 'December',
		// };

		// const dateChanger = function(date){
		// 	console.log('date', date);
		// 	const dateYear = date.substring(0, 4) || '';
		// 	let dateMon    = date.substring(5,7) || '';
		// 	dateMon        = monthDict[dateMon] || '';
		// 	return (dateMon + ' ' + dateYear);
		// };

		// const degreeDate = dateChanger($('#degreeMonth').val()) || '';
		// const hsDate = dateChanger($('#highschoolMonth').val()) || '';

		// Form Info
		// let segmentContact = {
	 //        name   : $('#firstName').val() + " "  + $('#lastName').val(),
	 //        address: ($('#address').val() || '') + ", " + ($('#addressCity').val() || '') + ", " + ($('#addressState').val() || '') + " " + ($('#zipcode').val() || ''),
	 //        reach  : [
	 //            $('#email').val() || '',
	 //            $('#phone').val() || '',
	 //            ''
	 //        ]
		// };

		// let segmentEducation = {
	 //        title: 'EDUCATION',
	 //        items: [
	 //            {
	 //                city      : $('#universityCity').val(), 
	 //                state     : $('#universityState').val(),
	 //                start_date: degreeDate,
	 //                end_date  : '',
	 //                lines: [
	 //                    {
	 //                        bullet : false,
	 //                        title  : $('#university').val(),
	 //                        content: ''
	 //                    },
	 //                    {
	 //                        bullet : false,
	 //                        content: $('#degree').val() +  ' (Candidate) in Major'
	 //                    },
	 //                    {
	 //                        bullet : false,
	 //                        content: 'GPA ' + $('#universityGpa').val()
	 //                    },
	 //                    {
	 //                        bullet : false,
	 //                        title  : 'Honors/Awards: ',
	 //                        content: uniAwardStr
	 //                    },
	 //                    {
	 //                        bullet : false,
	 //                        title  : 'Relevant Coursework: ',
	 //                        content: uniCourseStr
	 //                    }
	 //                ]
	 //            },
	 //            {
	 //                city      : $('#highschoolCity').val(),
	 //                state     : $('#highschoolState').val(),
	 //                start_date: hsDate,
	 //                end_date  : "",
	 //                lines: [
	 //                    {
	 //                        title  : $('#highschool').val(),
	 //                        bullet : false,
	 //                        content: ''
	 //                    },
	 //                    {
	 //                        bullet : false,
	 //                        content: 'High School Diploma - ' + $('#highschoolGpa').val() + 'GPA'
	 //                    },
	 //                    {
	 //                        bullet : false,
	 //                        title  : 'Honors/Awards: ',
	 //                        content: hsAwardStr
	 //                    }
	 //                ]
	 //            }
	 //        ]
	 //    };
	    
		let segmentProfExp = {
			title:"",
			items: [],
		};

		//create the employer part of schema
	    for(let i = 1; i < $('.employer').length; i++){
	    	if (i === 1) {
	    		segmentProfExp.title = 'PROFESSIONAL EXPERIENCE';
	    	}
	    	let employer = '#employer' + String(i);
	    	let start    = dateChanger($(employer).find('.employerMonthStart').val());
	    	let end      = dateChanger($(employer).find('.employerMonthEnd').val());

	    	let employee = {
                city      : $(employer).find('.employerCity').val(),
                state     : $(employer).find('.employerState').val(),
                start_date: start,
                end_date  : end,
                lines: [
                    {
                        title  : $(employer).find('.employerInput').val(),
                        content: '',
                    },
                    {
                        italics: true,
                        content: $(employer).find('.employerTitle').val()
                    }
                ]
	    	};

	   		//Get job desription items
	    	for (let j = 1; j < 6; j++) {
	    		if ($(desc).find("[name='jobcontent']").val()) {
		    		let desc = '#cloneId' + String.fromCharCode(97 + i) + String(j);
		    		employee.lines.push({bullet: true, content: $(desc).find("[name='jobcontent']").val()});
		    	}

	    	}
	    	segmentProfExp.items.push(employee);
	    }

	    const schema = {
			contact : segmentContact,
			segments: [
				segmentEducation,
				segmentProfExp,
			]
		};

		//create the Leadership and Extracurricular part of schema
	    for(let i = 1; i < $('.leadAndExtra').length; i++){
	    	let activity = '#activity' + String(i);
	    	let start    = dateChanger($(activity).find("[name='activityDateStart']").val());
	    	let end      = dateChanger($(activity).find("[name='activityDateEnd']").val());

	    	let activityObj = {
	    		title: 'LEADERSHIP AND EXTRACURRICULAR',
				items: [
	                {
	                    city      : $(activity).find("[name='City']").val(),
	                    state     : $(activity).find("[name='State']").val(),
	                    start_date: start,
	                    end_date  : end,
	                    lines: [
	                        {
	                            title  : $(activity).find("[name='Organization']").val(),
	                            content: '',
	                            bullet : false
	                        },
	                        {
	                            bullet : false,
	                            italics: true,
	                            content: $(activity).find("[name='position']").val()
	                        }
	                    ]
	                }
	            ]
	    	};
	    	//Get activity desription items
	    	for (let j = 1; j < 6; j++) {
	    		let desc = '#clone2Id' + String.fromCharCode(97 + i);
	    		activityObj.items[0].lines.push({bullet: true, content: $(desc).find("[name='activityContent']").val()});
	    	}
	    	schema.segments.push(activityObj);
	    }


		//create the Skills part of schema
	    for(let i = 1; i < $('.skillClass').length; i++){
	    	let skill = '#skill' + String(i);

	    	let skillObj = {
	    		title: 'SKILLS',
				items: [
	                {
	                    lines: [
	                        {
	                            bullet : false,
	                            title  : $(skill).find("[name='skillCat']").val(),
	                            content: $(skill).find("[name='skillContent']").val()
	                        },
	                    ]
	                }
	            ]
	    	};
	    	schema.segments.push(skillObj);
	    }

	    console.log(JSON.stringify(schema,null,2));

	    $.ajax({
            url: '/pdfgen',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(schema),
            dataType: 'text',
            success: function(data) {window.open(data)},
            error: function (xhr, ajaxOptions, thrownError) {console.log(xhr.responseText, thrownError)}
        });
    });
});











