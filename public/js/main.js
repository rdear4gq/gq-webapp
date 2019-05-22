$(function() {
    
    "use strict";
    
    
    //===== 
    
    //  SideBar Menu
    
//      $(".mobile-bar").on("click", function (){
//               
//         $(".header-area, .all, .left-all").addClass("active-br");      
//        });
    
    
    
    $('.mobile-bar').click( function (){
                  
                $('.header-area, .all, .left-all').toggleClass('active-br');  
                $('.mobile-bar').toggleClass('active-br');  
                  
        });

    // sideHover();

    $('#datepicker').datepicker({
        uiLibrary: 'bootstrap4'
    });
    $('#datepicker2').datepicker({
        uiLibrary: 'bootstrap4'
    });
    

    // For ScrollBar 
    $(function() {  
        $("#user-details-wrap").niceScroll({
            cursorcolor:"#497190",
            cursorwidth: "10px",
            cursorborder: "0",
            background: "#204C6C",
        });
    });
    
    $(function() {  
        $("#rc-table-outer").niceScroll({
            cursorcolor:"#497190",
            cursorwidth: "10px",
            cursorborder: "0",
            background: "#204C6C",
        });
    });
    
    
    
    
    
    
    
});