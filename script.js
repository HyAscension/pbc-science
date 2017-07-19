var header = `
<h1>PBC Science</h1>
<ul>
    <li><a href="home.htm">Home</a></li>
    <li><A href="achievement_units.htm">AS Units</A></li>
    <li><A href="games.htm">Games</A></li>
    <li><a href="youtube.htm">Youtube</a></li>
    <li><A href="about.htm">About</A></li>
</ul>`;

document.getElementById('nav').innerHTML = header;

var copyrightyear = "&copy Hy 2017 - " + new Date().getFullYear();

document.getElementById('footer').innerHTML = copyrightyear;

var as91153 = `
<h1>Biology 2.1<br><p>Carry out a practical investigation in a biology context, with supervision</p></h1>
            <br>
            <p><strong>Level:</strong> 2 | <strong>Credits:</strong> 4 | <strong>Assessment:</strong> Internal
            <p>This achievement standard involves carrying out a practical investigation in a biology context, with supervision.<br>

            <h1>Achievement Criteria</h1><br>

            <p><strong>Achievement</strong> - Carry out a practical investigation in a biology context, with supervision.
            <p><strong>Achievement with Merit</strong> - Carry out an in-depth practical investigation in a biology context, with supervision.
            <p><strong>Achievement with Excellence</strong> - Carry out a comprehensive practical investigation in a biology context, with supervision.

            <h1>Explanatory Notes</h1><br>

            <p><strong>Investigating in Science</strong> - Develop and carry out investigations that extend their science knowledge, including developing their understanding of the relationship between investigations and scientific theories and models.</p><br>
            <p><strong>Understanding about Science</strong> - Understand that scientists have an obligation to connect their new ideas to current and historical scientific knowledge and to present their findings for peer review and debate.

            <h1>Carry out a practical investigation involves</h1><br>

            <p>Developing a statement of the purpose written as a hypothesis linked to a scientific concept or idea.</p><br>
            <p>Using a method that describes a range for the independent variable, the measurement of the dependent variable and the control of some other key variables for a fair test, or the data that will be collected, range of data/samples, and consideration of some other key factors for a pattern seeking or modelling activity.</p><br>
            <p>Collecting, recording, and processing data relevant to the purpose of the investigation.</p><br>
            <p>Interpreting and reporting on the findings.</p><br>
            <p>Reaching a conclusion based on the student's processed data which is relevant to the purpose of the investigation.</p><br>
            <p>Identifying and including relevant findings from another source.</p><br>

            <h1>Carry out an in-depth practical investigation involves</h1><br>

            <p>Using a method that describes a valid range for the independent variable, the valid measurement of the dependent variable and the control of other key variables with consideration of factors such as sampling bias and sources of errors for a fair test, or a valid collection of data with consideration of factors such as sampling bias and sources of errors for a pattern seeking or modelling activity.</p><br>
            <p>Collecting, recording, and processing data which enables a trend or pattern (or the absence of a trend or pattern) to be determined.</p><br>
            <p>Reaching a valid conclusion based on the student's processed data which is relevant to the purpose of the investigation.</p><br>
            <p>A discussion of the biological ideas relating to the investigation that is based on the student's findings and those from other source(s).</p><br>

            <h1>Carry out a comprehensive practical investigation involves</h1><br>

            <p>Justification of the choices made during the sound investigation, ie evaluating the validity of the method or reliability of the data and explaining the conclusion in terms of the biology ideas relevant to the investigation.</p><br>
            <p>A practical investigation is an activity covering the complete investigation process: planning and carrying out the investigation, collecting primary data, processing and interpreting data, and reporting on the investigation. Students may make changes to their initial method as they work through the investigation.</p><br>
            <p>Assessment against this standard may be based on a stand-alone or an individual investigation that can contribute findings to a larger group or class investigation.  In a group or class investigation, individual findings may be discussed and individual students may interpret their own findings in the light of other students' investigations and findings.  Findings from outside the group or class such as published information or historical findings relevant to the investigation may also be used.</p><br>
            <p>The nature of the investigation could be the manipulation of variables (fair test), the investigation of a pattern or relationship or the use of models.</p><br>
            <p>It is intended that this investigation be carried out with supervision.  This means that the teacher provides guidelines for the investigation such as the context for the investigation, instructions that specify the requirements for a comprehensive investigation, and broad experimental conditions such as the availability of equipment or chemicals.  Students then develop and complete the investigation from the initial guidelines given by the teacher.  Supervision may involve discussion between teachers and individual students in order to clarify the students' ideas and may also involve teachers managing the process of sharing findings.</p><br>
            <p>Conditions of Assessment related to this achievement standard can be found at http://ncea.tki.org.nz/Resources-for-Internally-Assessed-Achievement-Standards.</p><br>`;


document.getElementById('text').innerHTML = as91153;

document.getElementById("as91153").addEventListener('click', function(){
    document.getElementById('text').innerHTML = as91153;
});