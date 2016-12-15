
        var count = 0;
        document.getElementById("btnAddmale").onclick = function() {
            var new_div = document.createElement('div');
            /* 照字面翻，就是產生一個tag name是span的DOM實體 */

            var new_input = document.createElement('input');
            var new_label = document.createElement('label');
            var new_img = document.createElement('img');
            var new_textarea = document.createElement('input');
            new_div.setAttribute('class', 'funkyradio-primary col-lg-12 text-center');


            new_input.setAttribute('type', 'radio');
            new_input.setAttribute('name', 'radio');
            new_input.setAttribute('id', count);
            new_label.setAttribute('class', 'col-lg-8');
            new_label.setAttribute('for', count);
            new_img.setAttribute('src', "{% static 'img/male.jpeg' %}");
            new_img.setAttribute('class', 'img-circle');
            new_img.setAttribute('style', 'width:20px;height:30px;margin-left: -10%;');
            new_textarea.setAttribute('type', 'text');
            new_textarea.setAttribute('class', 'form-control col-lg-6');
            new_textarea.setAttribute('style', 'width:50%;margin-top: 1.5%;');



            /* 加上內文 */
            new_label.appendChild(new_img);
            new_div.appendChild(new_input);
            new_div.appendChild(new_label);
            new_div.appendChild(new_textarea);
            div3.appendChild(new_div);
            count++;
        };
        document.getElementById("btnAddfemale").onclick = function() {
            var new_div = document.createElement('div');
            /* 照字面翻，就是產生一個tag name是span的DOM實體 */

            var new_input = document.createElement('input');
            var new_label = document.createElement('label');
            var new_img = document.createElement('img');
            var new_textarea = document.createElement('input');
            new_div.setAttribute('class', 'funkyradio-danger col-lg-12 text-center');


            new_input.setAttribute('type', 'radio');
            new_input.setAttribute('name', 'radio');
            new_input.setAttribute('id', count);
            new_label.setAttribute('class', 'col-lg-8');
            new_label.setAttribute('for', count);
            new_img.setAttribute('src', ""{% static 'img/female.jpeg' %});
            new_img.setAttribute('class', 'img-circle');
            new_img.setAttribute('style', 'width:20px;height:30px;margin-left: -10%;');
            new_textarea.setAttribute('type', 'text');
            new_textarea.setAttribute('class', 'form-control col-lg-6');
            new_textarea.setAttribute('style', 'width:50%;margin-top: 1.5%;');



            /* 加上內文 */
            new_label.appendChild(new_img);
            new_div.appendChild(new_input);
            new_div.appendChild(new_label);
            new_div.appendChild(new_textarea);
            div3.appendChild(new_div);
            count++;
        };
