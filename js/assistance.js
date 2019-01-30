$(document).ready(function(){
    var count = 0;

    setInterval(workFunction,3000);
    function workFunction()
    {
    var land_content = "<ul>"+
                    "<li>Selection of land sites</li>"+
                    "<li>Prevailing rates</li>"+
                    "<li>Due diligence of the property</li>"+
                    "<li>Location Analysis</li>"+
                    "<li>Negotiations with the farmers</li>"+
                    "</ul>";
    var land_title = 
                    "<div><span>Farm Management</span></div>"+
                    "<div><span>Legal & Administrative</span></div>"+
                    "<div><span>Farmers Certificate</span></div>"+
                    "<div><span>Land Acquisition</span></div>"+
                    "<div><span>Valuation & Advisory</span></div>"+
                    "<div><span>Marketing Assistance</span></div>"+
                    "<div><span>Agri Business Development</span></div>";
    var valuation_content = "<ul>"+
                    "<li>Selection of valuation sites</li>"+
                    "<li>Prevailing rates</li>"+
                    "<li>Due diligence of the property</li>"+
                    "<li>Location Analysis</li>"+
                    "<li>Negotiations with the farmers</li>"+
                    "</ul>";
    var valuation_title = 
            "<div><span>Legal & Administrative</span></div>"+
            "<div><span>Farmers Certificate</span></div>"+
            "<div><span>Land Acquisition</span></div>"+
            "<div><span>Valuation & Advisory</span></div>"+
            "<div><span>Marketing Assistance</span></div>"+
            "<div><span>Agri Business Development</span></div>"+
            "<div><span>Farm Management</span></div>";
    var marketing_content = "<ul>"+
                    "<li>Selection of marketing sites</li>"+
                    "<li>Prevailing rates</li>"+
                    "<li>Due diligence of the property</li>"+
                    "<li>Location Analysis</li>"+
                    "<li>Negotiations with the farmers</li>"+
                    "</ul>";
    var marketing_title = 
            "<div><span>Farmers Certificate</span></div>"+
            "<div><span>Land Acquisition</span></div>"+
            "<div><span>Valuation & Advisory</span></div>"+
            "<div><span>Marketing Assistance</span></div>"+
            "<div><span>Agri Business Development</span></div>"+
            "<div><span>Farm Management</span></div>"+
            "<div><span>Legal & Administrative</span></div>";

    var agri_content = "<ul>"+
                    "<li>Selection of agri sites</li>"+
                    "<li>Prevailing rates</li>"+
                    "<li>Due diligence of the property</li>"+
                    "<li>Location Analysis</li>"+
                    "<li>Negotiations with the farmers</li>"+
                    "</ul>";
    var agri_title = 
            "<div><span>Land Acquisition</span></div>"+
            "<div><span>Valuation & Advisory</span></div>"+
            "<div><span>Marketing Assistance</span></div>"+
            "<div><span>Agri Business Development</span></div>"+
            "<div><span>Farmers Certificate</span></div>"+
            "<div><span>Farm Management</span></div>"+
            "<div><span>Legal & Administrative</span></div>";
   
    var farmers_content = "<ul>"+
                    "<li>Selection of farmers sites</li>"+
                    "<li>Prevailing rates</li>"+
                    "<li>Due diligence of the property</li>"+
                    "<li>Location Analysis</li>"+
                    "<li>Negotiations with the farmers</li>"+
                    "</ul>";
    var farmers_title = 
            "<div><span>Valuation & Advisory</span></div>"+
            "<div><span>Marketing Assistance</span></div>"+
            "<div><span>Agri Business Development</span></div>"+
            "<div><span>Farmers Certificate</span></div>"+
            "<div><span>Farm Management</span></div>"+
            "<div><span>Legal & Administrative</span></div>"+
            "<div><span>Land Acquisition</span></div>";

    
    var farm_content = "<ul>"+
                    "<li>Selection of farm sites</li>"+
                    "<li>Prevailing rates</li>"+
                    "<li>Due diligence of the property</li>"+
                    "<li>Location Analysis</li>"+
                    "<li>Negotiations with the farmers</li>"+
                    "</ul>";
    var farm_title = 
            "<div><span>Marketing Assistance</span></div>"+
            "<div><span>Farmers Certificate</span></div>"+
            "<div><span>Agri Business Development</span></div>"+
            "<div><span>Farm Management</span></div>"+
            "<div><span>Legal & Administrative</span></div>"+
            "<div><span>Land Acquisition</span></div>"+
            "<div><span>Valuation & Advisory</span></div>";



    var legal_content = "<ul>"+
                    "<li>Selection of legal sites</li>"+
                    "<li>Prevailing rates</li>"+
                    "<li>Due diligence of the property</li>"+
                    "<li>Location Analysis</li>"+
                    "<li>Negotiations with the farmers</li>"+
                    "</ul>";
     var legal_title = 
                "<div><span>Farmers Certificate</span></div>"+
                "<div><span>Agri Business Development</span></div>"+
                "<div><span>Farm Management</span></div>"+
                "<div><span>Legal & Administrative</span></div>"+
                "<div><span>Land Acquisition</span></div>"+
                "<div><span>Valuation & Advisory</span></div>"+
                "<div><span>Marketing Assistance</span></div>";



                if(count == 0)
                {
                    $('#assistance-content').html(land_content);
                    $('#assistance-title').html(land_title);

                }
                else if(count == 1)
                {
                    $('#assistance-content').html(valuation_content);
                    $('#assistance-title').html(valuation_title);

                }
                else if(count == 2)
                {
                    $('#assistance-content').html(marketing_content);
                    $('#assistance-title').html(marketing_title);

                }
                else if(count == 3)
                {
                    $('#assistance-content').html(farmers_content);
                    $('#assistance-title').html(farmers_title);

                }
                else if(count == 4)
                {
                    $('#assistance-content').html(agri_content);
                    $('#assistance-title').html(agri_title);

                }
                else if(count == 5)
                {
                    $('#assistance-content').html(farm_content);
                    $('#assistance-title').html(farm_title);


                }
                else if(count == 6)
                {
                    $('#assistance-content').html(legal_content);
                    $('#assistance-title').html(legal_title);

                }
              
                count++;
                if(count == 6)
                {

                    count = 0;
                }
    }
});