let display=(data,place)=>{
    data.forEach((el)=>{
        let div=document.createElement("div")
        div.setAttribute("class","tamplate")
        let pic=document.createElement("img")
        pic.src=el.image
        let div1=document.createElement("div")
        div1.setAttribute("class","mrp")
        let p1=document.createElement("p")
        p1.innerText="Price"
        let p2=document.createElement("p")
        p2.innerText=el.price
        p2.style.textDecoration="line-through"
        div1.append(p1,p2)
        let div2=document.createElement("div")
        div2.setAttribute("class","offers")
        let p3=document.createElement("p")
        p3.innerText="Price"
        let p4=document.createElement("h3")
        p4.innerText=`₹ ${el.offer}`
        div2.append(p3,p4)
        div.append(pic,div1,div2)
        div.addEventListener("click",()=>{
            localStorage.setItem("care-product",JSON.stringify(el))
            window.location.href="../html/care-subpage.html"
        })
       div.addEventListener("mousemove",()=>{
        div.style.cursor="pointer"
       })
        document.getElementById(place).append(div)
    })
    }
    function paragraph(){
        return ` <div id="paragraph">
        <div>
            <h5>Lab tests At home</h5>
            <p>Lab tests are essential not just to help the doctor detect a condition or a disease, but are also important to plan the treatment, monitor its efficacy, and switch it if it is not helping you the way it should. They may be advised by the doctor to detect certain specific conditions or as a part of a routine checkup. Until a few years ago, getting lab tests to check the samples of our blood, tissue, or urine to get a diagnosis of diseases or other conditions used to be done at hospitals or clinics. This used to have its own share of stress, costs, and other concerns. However, due to several innovations in diagnostic healthcare, things like telemedicine and home diagnostic tests are a reality. Home testing services have been possible due to the advancements in laboratory technology, growth and penetration of the internet, the birth of inventive health-tech startups, and the fact that people are becoming more cognizant of their health and ordering these tests and health checkup at home. Not only are these lab tests at home simple, systematic, have a quick turnaround time, but also 100 percent accurate. Depending on the service that you choose, home diagnostic tests can be done at ourselves at home or by experienced phlebotomists who come to collect the samples at home.</p>
            <h5>How does at-home lab test work?</h5>
            <p>Home lab tests are a swift and easy way to take control of your health. This is how they work: Keeping in mind the test advised by your doctor, select lab test near me, make the payment, and schedule the appointment. On the scheduled day and time, a phlebotomist will visit your location to collect your samples. After the completion of your lab test, your reports will be reviewed by experienced and independent physicians or by doctors in our panel of hospitals. Your reports with the diagnosis will be available on the app and will be emailed to you within 24 hours of the sample collection.</p>
            <h5>What types of diagnostic tests are available?</h5>
            <p>At Cult.fit, we offer close to 20 diagnostic tests that cover every aspect of your health. These tests include pathology tests, which involve the collection of blood and urine samples and screening tests. These medical tests at home include: Full body checkup: To understand your key health indicators and to diagnose lifestyle and chronic diseases like thyroid, diabetes, obesity, etc. It also evaluates conditions related to the liver, kidneys, heart, blood, etc. Vitamin Test lab test: To check for deficiencies of Vitamin B12 and D levels in your body. Women’s health pack : This includes lab tests for issues specific to women like PCOS, menstrual irregularities, thyroid, anaemia, etc. Hair fall screening: To identify nutritional deficiencies and hormonal imbalances that are causing hair-related conditions in both men and women. Immunity screening: To evaluate your vital health parameters that have a bearing on your immunity and the body’s natural defense system to diseases, and to assess your infection susceptibility. Fever panel test: This pack screens for conditions like dengue, typhoid, malaria, and other causes of fever. This is mainly for people who are experiencing fever symptoms for 2 days or more. Thyroid screening: This test is for those who have been detected with thyroid or show symptoms of thyroid dysfunction. It is helpful in assessing and monitoring this condition. Diabetes screening: This test is recommended for people who are pre-diabetic, have heart diseases, or are obese. It is helpful in monitoring the glucose levels in the blood. Bone health screening: This test measures conditions related to your bones and is helpful for people who experience bone pain, stiffness, immobility, etc. Lipid screening: To assess your susceptibility to cardiac diseases and increased cholesterol levels. This test is recommended for people who are obese, suffer from high levels of stress, diabetics, eat a rich diet, smoke, or have a family history of strokes or heart diseases. Haemogram with CBC: This test is done to assess the levels of your red blood cells, white blood cells, and platelets count. It helps in diagnosing conditions like excessive bleeding, blood clotting disorders, anaemia, infections, etc. Pregnancy test: This is a blood test that is done to confirm if you are pregnant. Obesity risk profile lab test: This test is done to evaluate and assess conditions that are associated with obesity. This is recommended for people who experience fluctuations in their weight, have metabolic issues, and high BMI. Kidney function test: This test is done to evaluate the functioning of your kidneys and is recommended for people who have high blood pressure, diabetes, heart diseases, or a family history of kidney diseases. Liver function test: This test is done for people who show symptoms of damage to their liver. It is helpful for people who suffer issues like dark urine, swelling of stomach, sallow eyes and skin, fatigue, constant nausea, etc. Iron screening test: This test helps evaluate the levels of iron metabolism in your body. It is especially recommended for people who experience shortness of breath, weight & hair loss, fatigue, etc. Alcohol risk assessment test: This test is designed for people who have had a long-term dependence on alcohol. It assesses the functioning and status of your liver and pancreas and evaluates the damage caused by the consumption of alcohol.</p>
            <h5>How to Book a Lab test Online?</h5>
            <p>Getting a diagnostic test at home has never been easier. You just need to follow these steps for getting the lab test at home done: Register yourself on the Cult.fit website or the mobile application in simple and easy steps. Buy the screening pack on either the website or the mobile application. Search for ‘lab test near me’ to choose the lab of your choice and the test that needs to be done. Schedule the lab test at home at a time and day convenient to you after you make the payment for the test</p>
    
        </div>
        <div>
            <p>pack. Once you make the payment, you will receive a confirmation from us about your lab test at home. You will be visited by a phlebotomist who will collect your samples from home. After the completion of the test, you will receive your report within 24 hours.</p>
            <h5>What are the Benefits of At-home lab tests</h5>
            <p>Looking at the kind of popularity that diagnostic tests and health check-up at home have gained, there are obvious advantages that one gains. Some of the most important benefits of medical tests at home include: One of the biggest advantages of booking lab tests online with cult.fit is our partnership with ‘Healthians’, which is a NABL Certified Lab that provides reliable and high-quality diagnostic results.  Diagnostic tests and health checkup at home saves a lot of time that you would have otherwise spent traveling and in waiting rooms.  A great advantage of booking lab tests online is that you can schedule them at your convenience. You can take care of your health needs while being completely flexible.  Cult.fit guarantees to meet your schedule as per your convenience. Our technicians who collect the samples are punctual and professional. Once you have purchased your diagnostic test sample pack, you do not need to pay any extra fees for your sample collection. We offer free home sample pickup. You can book more than one lab test at home when opting for lab tests. We have packages that comprise specific tests for a comprehensive diagnosis. This does away with your need to search multiple options for lab tests near me.  All our sample collection teams i.e. phlebotomists are not only technically trained but are also proficient with security and quality protocols to let you have an anxiety-free test experience.  All our technical teams who visit your home are WHO certified and trained on NABL guidelines on sanitization techniques and wear personal protective equipment at all times.  You get your reports within a day of your test. The reports that you get are comprehensive and easy to understand. Your search for a lab test at home near me ends with Cult.fit. We are a comprehensive healthcare provider and take care of all your medical needs including online doctor consultations, health check-up at home, lab tests online, therapy sessions at home, etc.  Since they are conducted at home, these tests are easy and swift.  Since you do not need to travel to diagnostic centres, clinics, or hospitals, you save the cost of travel, parking, and don’t have to be off work.  When you get a health checkup at home, you don’t have to be concerned about the risk of infections that you may encounter at a clinic or hospital that are full of people.  Getting diagnostic tests at home are especially beneficial for people who cannot travel. People who have limited immunity and compromised immunity benefit the most from getting tests done at home. </p>
            <h5>Where will I get my lab test reports?</h5>
            <p>Within 24 hours of the completion of your test, you will receive your digital diagnostic test reports within 24 hours. You can access these reports on your Cult.fit app and your email.</p>
            <h5>Top Searches</h5>
            <p>Cardio Exercises | Lean Muscle | Lean Body | Weight Loss Exercises | Six Pack Abs | HIIT Workout for Beginners | Exercise for Belly Fat | HRX Workout | Handstand Push Up | Online Fitness Trainer | How To Increase Stamina | Online Yoga Classes | Split Exercise | Workout For Beginners | Dumbbell Exercises | Pilates Workout | Walking Exercise | Pistol Squats | Oblique Exercises | Gym Near Me</p>
            <h5>Mindfulness</h5>
            <p>Yoga Asanas | Yoga For Weight Loss | Kids Yoga | Surya Namaskar | Online Yoga Classes | Yoga For Beginners | Yoga Nidra | Music Meditation | Pranayam | Bedtime Stories | Bedtime Stories For Kids | Mindfulness Meditation | Meditation in Hindi | Sleep Meditation | Meditation</p>
            <h5>Online Doctor Consultation & Diagnostic Tests</h5>
            <p>Dentist Near Me | Gynaecologist Near Me | Dermatologist Near Me | Endocrinologist Near Me | Pulmonologist Near Me | Cardiologist Near Me | Orthopedist Doctor Near Me | Thyroid Test | Pregnancy Test | Full Body Checkup | Kidney Function Test | Therapist Near Me | Online Counselling | Physiotherapist Near Me</p>
            <h5>Healthy Recipes</h5>
            <p>Sambar Recipe | Masala For Dosa | Kadai Paneer Recipe | Mattar Paneer Recipe | Manchow Soup | Egg Curry | Chilli Baby Corn | Homemade Protein Powder | Veg Thukpa | Double Ka Meetha</p>
            <h5>Gyms In India</h5>
            <p>Gyms In Delhi | Gyms In Mumbai | Gyms In Bangalore | Gyms In Pune | Gyms In Chennai | Gyms In Hyderabad | Gyms In Jaipur | Gyms In Kolkata | Gyms In Ahmedabad | Gyms In Chandigarh | Gyms In Indore | Gyms In Coimbatore | Gyms In Surat | Gyms In Ludhiana | Gyms In Vizag | Gyms In Amritsar | Gyms In Mysore | Gyms In Mangalore | Gyms In Kochi | Gyms In Jammu | Gym In Kharghar | Gym In Bandra | Gym In Velachery | Gym In Chembur | Gym In Indiranagar | Gym In HSR Layout</p>
        </div>`
    }
    export {display,paragraph}