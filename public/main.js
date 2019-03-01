window.onload = function() {
  var selector = document.getElementById("project-select");
  var infoWindow = document.getElementById("main-info-window");
  var learnMoreButton = document.getElementById("learn-more-button");
  var aboutMe = [
    `<div class="info-window-content">
      <p class="text-center title">About Me</p>
      <br>
      <p class="text-small">
        I'm an 18 year old high school student in Atlanta, Georgia who is interested in Computer Science, Jazz Music (and Drumming), and 
        Political Philosophy. When I was 16, I, along with two colleagues, formed a company called Rolltrax, which specializes in 
        automating many of the day-to-day activities of a Work-Based Learning Coordinator. Since then, I have taken the role of Lead 
        Developer alongside my friend <a href="http://ohad.space/">Ohad Rau</a> to develop and maintain Rolltrax. I have also worked as 
        a Network Engineer for the largest school district in Georgia, Fulton County Schools. Outside of my CS career, I enjoy reading 
        and debating political philosophy. I founded the Young Americans for Liberty chapter at my high school, which is an organization
        dedicated to promoting liberty-minded political ideas. I am also an avid
        Jazz fan (specifically jazz fusion), and have played drum set since I was seven years old. You can find some of my political
        and musical musings at my <a href="https://medium.com/@zbaylin">Medium blog</a>.
      <p/>
    <div/>`,
    '/'
  ];
  var rolltrax = [
    `<div class="info-window-content">
      <p class="text-center title">Rolltrax</p>
      <br>
      <p class="text-small">
        When I was a junior in high school, I joined my school's Work-Based Learning program 
        so I could continue my job as a Network Engineer for my school system. Very early on
        in the school year, the coordinator of the program indicated that he had long wanted
        a cloud-based attendance system, which would allow him to focus on the more crucial
        parts of his job. I whipped up a quick prototype in Python using Tk, and Rolltrax was
        born. It quickly grew into a much more advanced software toolkit, which allows complete
        management of the administrative tasks of a Work-Based Learning coordinator. Currently,
        the Rolltrax backend is written in <a href="https://crystal-lang.org/">Crystal</a>, and
        the web UI is written in React using the <a href="https://reasonml.github.io/en/">ReasonML</a>
        OCaml syntax. The mobile app (<a href="https://itunes.apple.com/US/app/id1435609845?mt=8">iOS</a>, <a href="https://play.google.com/store/apps/details?id=com.rolltrax.rolltrax_student">Android</a>) is written in <a href="https://flutter.io">Flutter</a>.
      <p/>
    <div/>`,
    'https://rolltrax.com'
  ];
  var bibliotech = [
    `<div class="info-window-content">
      <p class="text-center title">bibliotech</p>
      <br>
      <p class="text-small">
        This was an app I developed alongside two friends/developers. 
        It was designed to be part of the 2018 FBLA Mobile App Development 
        competition. It's primary job is to serve as a library management
        tool for both patrons and administrators of a library. The backend
        is written in <a href="https://ruby-lang.org">Ruby</a>, and the app
        itself is written in <a href="https://flutter.io">Flutter</a>
      <p/>
    <div/>`,
    'https://github.com/zbaylin/bibliotech'
  ];
  var securityPy = [
    `<div class="info-window-content">
      <p class="text-center title">security-py</p>
      <br>
      <p class="text-small">
        This project started as a simple way to parse 13F-HR Forms provided
        by the SEC for my father. It quickly turned into a general trend data
        generator for numerous types of security filings. It is written in
        <a href="https://python.org">Python</a> using the <a href="https://pandas.pydata.org/">pandas</a>
        data science library.
      <p/>
    <div/>`,
    'https://github.com/zbaylin/security-py'
  ];
  var rofiWifiMenu = [
    `<div class="info-window-content">
      <p class="text-center title">rofi-wifi-menu</p>
      <br>
      <p class="text-small">
        This was one of my first forays into open-source. I was on a fairly
        barebones Linux distro with no GUI for changing WiFi networks. I wrote
        this shell script as an addon to the popular program <a href="https://github.com/DaveDavenport/rofi">rofi</a>.
      <p/>
    <div/>`,
    'https://github.com/zbaylin/rofi-wifi-menu'
  ];
  var resume = [
    `<div class="info-window-content">
      <p class="text-center title">R&#233;sum&#233;</p>
      <br>
      <p class="text-small">
        Click the <b>Learn More!</b> button below to view a copy of my r&#233;sum&#233;.
      <p/>
    <div/>`,
    '/public/resume.pdf'
  ];
  infoWindow.innerHTML = aboutMe[0];
  selector.onchange = function(e) {
    learnMoreButton.disabled = false;
    switch (selector.options[selector.selectedIndex].value) {
      case 'rolltrax':
        infoWindow.innerHTML = rolltrax[0];
        learnMoreButton.onclick = () => { window.open(rolltrax[1], '_blank') }
        break;
      case 'bibliotech':
        infoWindow.innerHTML = bibliotech[0];
        learnMoreButton.onclick = () => { window.open(bibliotech[1], '_blank') }
        break;
      case 'security-py':
        infoWindow.innerHTML = securityPy[0];
        learnMoreButton.onclick = () => { window.open(securityPy[1], '_blank') }        
        break;
      case 'rofi-wifi-menu':
        infoWindow.innerHTML = rofiWifiMenu[0];
        learnMoreButton.onclick = () => { window.open(rofiWifiMenu[1], '_blank') }        
        break;
      case 'resume':
        infoWindow.innerHTML = resume[0];
        learnMoreButton.onclick = () => { window.open(resume[1], '_blank') }        
        break;
      default:
        infoWindow.innerHTML = aboutMe[0];
        learnMoreButton.disabled = true;
        break;
    }
  }
}

function playStartup() {
  var audio = new Audio('/public/audio/o98.wav');
  audio.play();
}