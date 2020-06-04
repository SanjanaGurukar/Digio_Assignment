import React from 'react'
import './NextPage.css';

export default class NextPage extends React.Component{
    constructor(props){
      super(props);
      this.state = {
      showPopup:true,
      formValid: false,
      errorCount: null,
      isChecked: false,
      errors: {
        aadhar: '',
        otp:''
      }
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.name === 'isChecked' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

    onClick(){
      this.setState({  
        showPopup: !this.state.showPopup  
   }); 
   alert("Aadhar Verified Succesfully")
    }

    validateForm = (errors) => {
      let valid = true;
      Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
      );
      return valid;
    }
    
    countErrors = (errors) => {
      let count = 0;
      Object.values(errors).forEach(
        (val) => val.length > 0 && (count = count+1)
      );
      return count;
    }
    handleChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      let errors = this.state.errors;
  
      if(name === 'aadhar') {
          errors.aadhar = 
            value.length === 12
              ? ''
              : 'aadhar is not valid!';
      }
      else if(name === 'otp'){
        errors.otp = 
          value.length === 6 ? '' : 'Invalid OTP';
      }
  
      this.setState({errors, [name]: value});
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({formValid: this.validateForm(this.state.errors)});
      this.setState({errorCount: this.countErrors(this.state.errors)});
    }    


    render(){
      const {errors, formValid} = this.state;
      return(
        <div>
          {this.state.showPopup ? 
          <div>
          <div className='popup'>  
          <div className='popup_inner'>  
            <h2>Register Aadhar</h2>
            
            <form onSubmit={this.handleSubmit} noValidate>
              <div className = "aadhar">
                <p>Proceed with your aadhar</p>
                <input 
                  type='text' 
                  name='aadhar'
                  className="text"
                  minLength={12}
                  onChange={this.handleChange} noValidate
                />
                  {errors.aadhar.length > 0 && 
                        <span className='error'>{errors.aadhar}</span>}
              
              <button className="button"> Verify </button>
              </div>
                
                
                  <input
                    name="isChecked"
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange={this.handleInputChange} />
                    <label>
                I agree to eSign this KYC document to get started
                </label>
                <input 
                  type='text' 
                  name='otp'
                  className="text"
                  minLength={6}
                  onChange={this.handleChange} noValidate
                />
                  {errors.otp.length > 0 && 
                        <span className='error'>{errors.otp}</span>}
              <button className="button" onClick={this.onClick.bind(this)}> Submit </button>
                
            </form>


            
          </div>  
          </div>  
        <div className="page">
          <p className="para">Mutual fund
              From Wikipedia, the free encyclopedia
              Jump to navigationJump to search
              A mutual fund is an open-end professionally managed investment fund[1] that pools money from many investors to purchase securities. These investors may be retail or institutional in nature. The term is typically used in the United States, while similar structures across the globe include the SICAV in Europe ('investment company with variable capital') and open-ended investment company (OEIC) in the UK.

              Mutual funds have advantages and disadvantages compared to direct investing in individual securities. The advantages of mutual funds include economies of scale, economies of scope, diversification, liquidity, and professional management. However, these come with mutual fund fees and expenses.

              Not all investment funds are mutual funds;[2] alternative structures include unit investment trusts, closed-end funds, and exchange-traded funds (ETFs). These alternative structures share similarities such as liquidity due to trading on exchanges and, in the United States, similar consumer protections under the Investment Company Act of 1940.

              Mutual funds are also classified by their principal investments as money market funds, bond or fixed income funds, stock or equity funds, hybrid funds, or other. Funds may also be categorized as index funds, which are passively managed funds that match the performance of an index, or actively managed funds. Hedge funds are not mutual funds as hedge funds cannot be sold to the general public and lack various standard investor protections.</p>
        </div>
        </div>
        :
          <div className="page">
          <p className="para">Mutual fund
              From Wikipedia, the free encyclopedia
              Jump to navigationJump to search
              A mutual fund is an open-end professionally managed investment fund[1] that pools money from many investors to purchase securities. These investors may be retail or institutional in nature. The term is typically used in the United States, while similar structures across the globe include the SICAV in Europe ('investment company with variable capital') and open-ended investment company (OEIC) in the UK.

              Mutual funds have advantages and disadvantages compared to direct investing in individual securities. The advantages of mutual funds include economies of scale, economies of scope, diversification, liquidity, and professional management. However, these come with mutual fund fees and expenses.

              Not all investment funds are mutual funds;[2] alternative structures include unit investment trusts, closed-end funds, and exchange-traded funds (ETFs). These alternative structures share similarities such as liquidity due to trading on exchanges and, in the United States, similar consumer protections under the Investment Company Act of 1940.

              Mutual funds are also classified by their principal investments as money market funds, bond or fixed income funds, stock or equity funds, hybrid funds, or other. Funds may also be categorized as index funds, which are passively managed funds that match the performance of an index, or actively managed funds. Hedge funds are not mutual funds as hedge funds cannot be sold to the general public and lack various standard investor protections.</p>
        </div>}
        </div>
      )
    }
  }
    