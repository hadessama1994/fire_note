import React from 'react';
import {Content} from 'rbx';
import "../styles/home.scss";


function footer(){
    return(
<>

  <Content textAlign="centered" className= "footer">
    <p >
      Created by <a href="https://github.com/hadessama94">Eduardo Nicolli</a>.
      The source code is released under the{' '}
      <a href="https://opensource.org/licenses/mit-license.php">
        MIT License
      </a>
      . The website content is made with <strong>rbx</strong>
           
    </p>
  </Content>

</>

    )}


    export default footer
