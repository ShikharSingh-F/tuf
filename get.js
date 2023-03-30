
const home=function()
{
const html1=`<!DOCTYPE html>
<html lang="en">
<Body>   
<nav>  
<ul>  
<li>  
<a href="#"> Home </a>  
</li>  
<li>  
<a href="#"> About </a>  
</li>  
<li>  
<a href="#"> Contact </a>  
</li>  

</Body>   
</Html>  `;
return html1;
}
const server=function()
{
const html1=``;
return html1;
}
const contact=function()
{
    const html=` <div class="container">
    <div style="text-align:center">
      <h2>Contact Us</h2>
      <p>Swing by for a cup of coffee, or leave us a message:</p>
    </div>
    <div class="row">
      <div class="column">
        <img src="/w3images/map.jpg" style="width:100%">
      </div>
      <div class="column">
        <form action="/action_page.php">
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name..">
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name..">
          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style="height:170px"></textarea>
          <input type="submit" value="Submit">
        </form>
      </div>
    </div>
  </div>`
    return html;
}

  module.exports ={
    home,
  server,
  contact
}