import React, { Component } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

export class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      data: []
    }
  }
  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })


  }

  handleClick = (e) => {
    e.preventDefault()
    if (!this.state.name && !this.state.email && !this.state.message) {
      alert('write your name and email and som e message  me')



    } else if (!this.state.name && !this.state.email) {
      alert('write your name and email ')



    } else if (!this.state.name && !this.state.message) {
      alert('write your name and som e message  me')



    } else if (!this.state.email && !this.state.message) {
      alert('write your  email and som e message  me')



    }
    else if (!this.state.name) {
      alert('write your name')

    } else if (!this.state.email.includes('@gmail.com')) {
      alert('write your email')


    } else if (!this.state.message) {
      alert('write your message')

    } else {
      this.setState(
        {
          name: '',
          email: '',
          message: ''
        }
      )
      setTimeout(() => {
        alert('lkjasd')

      }, 3000);
    }





  }
  render() {

    // const { theme } = this.props.theme
    return (
      <div className='container ' >
        <h2 className='text-center m-8 text-[32px]'>contact</h2>

        <form className={`flex flex-col gap-2 p-2 border mb-4 w-[350px] sm:w-[450px] m-auto`}
        >
          <input type="text" placeholder='name' onChange={this.inputChange} value={this.state.name}
            className={`bg-[#ccd6f6] p-4  `} name='name' />
          <input type="text" placeholder='email' onChange={this.inputChange} value={this.state.email}
            className={`bg-[#ccd6f6] p-4   `} name='email' />
          <textarea name="message" id="" onChange={this.inputChange} value={this.state.message}
            cols="30" rows="8" className={`bg-[#ccd6f6] p-2   `}
            placeholder='message' ></textarea>
          <button type='submit' name='button' onClick={this.handleClick}
            className='border-2 bg-blue-700  w-[150px] flex items-center mx-auto p-4 m-4 rounded gap-4 group'>send me  <FaLongArrowAltRight className='group-hover:rotate-90 duration-500 ' /></button>
        </form>
      </div>
    )
  }
}

export default ContactForm