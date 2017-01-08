
        var count = 2;
        document.getElementById("plus").onclick = function() {
            var new_row = document.createElement('div');
            /* 照字面翻，就是產生一個tag name是span的DOM實體 */
            var new_div_lg_2 = document.createElement('div');
            var new_div = document.createElement('div');
            var new_input = document.createElement('input');
            var new_label = document.createElement('label');
            var new_questionmark = document.createElement('i');
            var new_div_select = document.createElement('div');
            var new_select = document.createElement('select');
            var new_male = document.createElement('option');
            var new_female = document.createElement('option');
            var new_textarea = document.createElement('input');
            var new_div_lg_2_2 = document.createElement('div');

            new_row.setAttribute('class', 'row');

            new_div_lg_2.setAttribute('class', 'col-lg-2');

            new_div.setAttribute('class', 'radio col-lg-8 dialog');

            new_input.setAttribute('type', 'radio');
            new_input.setAttribute('name', 'optradio');
            new_input.setAttribute('id', count);
            new_input.value = count;

            new_label.setAttribute('class', 'btn btn-default btn-circle btn-lg col-lg-1');
            new_label.setAttribute('for', count);

            new_questionmark.setAttribute('class', 'fa fa-question questionmark');
            new_label.appendChild(new_questionmark);

            new_div_select.setAttribute('style', 'margin-left:-1%;margin-right:3%');
            new_div_select.setAttribute('class', ' col-lg-1');

            new_male.innerHTML = "&#xf183;";
            new_female.innerHTML = "&#xf182;";
            new_select.appendChild(new_male);
            new_female.setAttribute('value', "female");
            new_select.appendChild(new_female);
            new_male.setAttribute('value', "male");
            new_select.setAttribute('name', "gender"+count);
            new_div_select.appendChild(new_select);

            new_textarea.setAttribute('type', 'text');
            new_textarea.setAttribute('class', 'form-control col-lg-8');
            new_textarea.setAttribute('style', 'width:70%;height:40px;font-size:18px; ');
            new_textarea.setAttribute('placeholder', "他說...");
            new_textarea.setAttribute('name', "content"+count);

            new_div_lg_2_2.setAttribute('class', 'col-lg-2');
            /* 加上內文 */
            new_div.appendChild(new_input);
            new_div.appendChild(new_label);
            new_div.appendChild(new_div_select);
            new_div.appendChild(new_textarea);


            new_row.appendChild(new_div_lg_2);
            new_row.appendChild(new_div);
            new_row.appendChild(new_div_lg_2_2);
            dialog.insertBefore(new_row, dialog.children[count + 1]);

            count++;
            document.getElementById("count").value = count;
        };
        // document.getElementById("btnAddfemale").onclick = function() {
        //      var new_row = document.createElement('div');
        //     /* 照字面翻，就是產生一個tag name是span的DOM實體 */
        //     var new_div_lg_2 = document.createElement('div');
        //     var new_div = document.createElement('div');
        //     var new_input = document.createElement('input');
        //     var new_label = document.createElement('label');
        //     var new_questionmark = document.createElement('i');
        //     var new_div_select = document.createElement('div');
        //     var new_select = document.createElement('select');
        //     var new_male = document.createElement('option');
        //     var new_female = document.createElement('option');
        //     var new_textarea = document.createElement('input');
        //     var new_div_lg_2_2 = document.createElement('div');

        //     new_row.setAttribute('class', 'row');

        //     new_div_lg_2.setAttribute('class', 'col-lg-2');

        //     new_div.setAttribute('class', 'radio col-lg-8 dialog');

        //     new_input.setAttribute('type', 'radio');
        //     new_input.setAttribute('name', 'optradio');
        //     new_input.setAttribute('id', count);
        //     new_input.value = count;

        //     new_label.setAttribute('class', 'btn btn-default btn-circle btn-lg col-lg-1');
        //     new_label.setAttribute('for', count);

        //     new_questionmark.setAttribute('class', 'fa fa-question questionmark');
        //     new_label.appendChild(new_questionmark);

        //     new_div_select.setAttribute('style', 'margin-left:-1%;margin-right:3%');
        //     new_div_select.setAttribute('class', ' col-lg-1');

        //     new_male.innerHTML = "&#xf183;";
        //     new_female.innerHTML = "&#xf182;";
        //     new_select.appendChild(new_male);
        //     new_female.setAttribute('value', "female");
        //     new_select.appendChild(new_female);
        //     new_male.setAttribute('value', "male");
        //     new_select.setAttribute('name', "gender"+count);
        //     new_div_select.appendChild(new_select);

        //     new_textarea.setAttribute('type', 'text');
        //     new_textarea.setAttribute('class', 'form-control col-lg-8');
        //     new_textarea.setAttribute('style', 'width:70%;height:40px;font-size:18px; ');
        //     new_textarea.setAttribute('placeholder', "他說...");
        //     new_textarea.setAttribute('name', "content"+count);

        //     new_div_lg_2_2.setAttribute('class', 'col-lg-2');
        //     /* 加上內文 */
        //     new_div.appendChild(new_input);
        //     new_div.appendChild(new_label);
        //     new_div.appendChild(new_div_select);
        //     new_div.appendChild(new_textarea);


        //     new_row.appendChild(new_div_lg_2);
        //     new_row.appendChild(new_div);
        //     new_row.appendChild(new_div_lg_2_2);
        //     dialog.insertBefore(new_row, dialog.children[count]);
            
            
        //     count++;
        //     document.getElementById("count").value = count;
        // };
