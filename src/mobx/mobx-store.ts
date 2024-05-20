import { makeAutoObservable } from "mobx"

class MobxStore {
    constructor() {makeAutoObservable(this)}

    inputObj = {
        login: '',
        password: ''
    }


    inputObjErr = {
        loginErr: '',
        passwordErr: ''
    }

    submitData = () => {
        this.validateData()
        if (Object.values(this.inputObjErr).every(i => i === '')) {
            alert('Success')
        }
    }

    updateInputData = (key: string, value: string) => {
        this.inputObj = {
            ...this.inputObj,
            [key]:value
        }
        this.inputObjErr = {
            ...this.inputObjErr,
            [key+'Err']: ''
        }
    }

    validateData = () => {
        const inp = this.inputObj
        const inpErr = this.inputObjErr

        if (inp.login == '') inpErr.loginErr = 'Write login'
        else if (inp.login.length < 3) inpErr.loginErr = 'Login min length: 3 bytes'
        else if (!/^[a-zA-Z0-9]+$/.test(inp.login)) inpErr.loginErr = 'Login can have only words and letters'

        if (inp.password == '') inpErr.passwordErr = 'Write password'
        else if (inp.password.length < 6) inpErr.passwordErr = 'Password min length: 6 bytes'
        else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/\\])[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?/\\]{8,}$/.test(inp.password)) inpErr.passwordErr = 'Password is incorrect'
    }

}

export const mobxStore = new MobxStore