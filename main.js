$(document).ready(function(){
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    $('#simple-search').on('keypress', function(e){
        if(e.which === 13){
            e.preventDefault();
            window.location = 'https://www.google.ro/#q=' + $(this).val();
        }
    });
    $('#filetype-search-name').on('keypress', function(e){
        if(e.which === 13){
            e.preventDefault();
            window.location = 'https://www.google.ro/#q=filetype:' + $('#filetype-search-type').val() + ' ' + $(this).val();
        }
    });
    $('#site-search-name').on('keypress', function(e){
        if(e.which === 13){
            e.preventDefault();
            window.location = 'https://www.google.ro/#q=site:' + $('#site-search-url').val() + ' ' + $(this).val();
        }
    });
    $('#weather-search-place').on('keypress', function(e){
        if(e.which === 13){
            e.preventDefault();
            window.location = 'https://www.google.ro/#q=weather ' + $(this).val() + ' ' + $('#weather-search-day').val();
        }
    });
    $('#definition-search').on('keypress', function(e){
        if(e.which === 13){
            e.preventDefault();
            window.location = 'https://www.google.ro/#q=define ' + $(this).val();
        }
    });
    $('#sinan-search').on('keypress', function(e){
        if(e.which === 13){
            e.preventDefault();
            var option = $('input[name=sinan]:checked').val();
            window.location = 'https://www.google.ro/#q='+ option + ' ' + $(this).val();
        }
    });
    $('#title-search').on('keypress', function(e){
        if(e.which === 13){
            e.preventDefault();
            window.location = 'https://www.google.ro/#q=intitle:' + $(this).val();
        }
    });
    $('#related-search').on('keypress', function(e){
        if(e.which === 13){
            e.preventDefault();
            window.location = 'https://www.google.ro/#q=related:' + $(this).val();
        }
    });
});
