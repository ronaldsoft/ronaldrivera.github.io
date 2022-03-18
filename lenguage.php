<?php
/**
 * Holds the reference to lenguage
 * @global array $lang
 */
  $GLOBALS['lang'] = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2); 
switch ($GLOBALS['lang']) {
  case 'en':
    $lang = array();
    $lang['PAGE_TITLE'] = 'Cv - Ronald'; 
    $lang['copyright'] = 'Web Design and Development By'; 
    $lang['cv_link'] = './documents/CVEnglish.pdf';
    $lang['contact'] = 'Find me!';
    $lang['hi'] = 'Hi!';
    $lang['im'] = 'I\'m Ronald Rivera';  
    $lang['aboutme'] = 'About me.'; 
    $lang['i_like'] = 'I like it :)';  
    $lang['like1'] = '- Be organized with the code.';
    $lang['like2'] = '- Being responsible.';
    $lang['like3'] = '- UX and UI.';
    $lang['like4'] = '- Use forms to streamline work.';
    $lang['like5'] = '- Use an ordered structure.';
    $lang['like6'] = '- Be Back-end and Front-end.';       
    $lang[0] = 'en'; 
  break;

  case 'es':
    $lang = array();
    $lang['PAGE_TITLE'] = 'Cv - Ronald'; 
    $lang['copyright'] = 'Diseño y Desarrollo De Web Por'; 
    $lang['cv_link'] = './documents/CVSpanish.pdf';
    $lang['contact'] = 'Contactame!';
    $lang['hi'] = 'Hola!';
    $lang['im'] = 'Soy Ronald Rivera';
    $lang['aboutme'] = '¿Quieres saber 
              más de mi?';
    $lang['i_like'] = 'Lo que 
              me gusta :)';  
    $lang['like1'] = '- Ser organizado con el codigo.';
    $lang['like2'] = '- Ser responsable.';
    $lang['like3'] = '- UX y UI.';
    $lang['like4'] = '- Usar formas para agilizar el trabajo.';
    $lang['like5'] = '- Usar una estructura ordenada.';
    $lang['like6'] = '- Ser Back-end y Front-end.';    
    $lang[0] = 'es'; 
  break;

  default: 
    $lang = array();
    $lang['PAGE_TITLE'] = 'Cv - Ronald'; 
    $lang['copyright'] = 'Web Design and Development By'; 
    $lang['cv_link'] = './documents/CVEnglish.pdf';
    $lang['contact'] = 'Find me!';
    $lang['hi'] = 'Hi!';
    $lang['im'] = 'I\'m Ronald Rivera';  
    $lang['aboutme'] = 'About me.'; 
    $lang['i_like'] = 'I like it :)'; 
    $lang['like1'] = '- Be organized with the code.';
    $lang['like2'] = '- Being responsible.';
    $lang['like3'] = '- UX and UI.';
    $lang['like4'] = '- Use forms to streamline work.';
    $lang['like5'] = '- Use an ordered structure.';
    $lang['like6'] = '- Be Back-end and Front-end.';        
    $lang[0] = 'en';     
}