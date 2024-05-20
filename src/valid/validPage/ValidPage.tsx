import { observer } from 'mobx-react-lite'
import s from './ValidPage.module.css'
import { mobxStore } from '../../mobx/mobx-store'

export const ValidPage = observer(() =>{
    const { inputObj, inputObjErr, updateInputData, submitData } = mobxStore

    return(
        <div className={s.main}>
            <div className={s.container}>
                {/* login */}
                <div className={s.inpdiv}>
                    <input
                        type="text"
                        placeholder='login'
                        maxLength={16}
                        value={inputObj.login}
                        onChange={e => updateInputData('login', e.target.value)}
                    />
                    {inputObjErr.loginErr != '' && <span>{inputObjErr.loginErr}</span>}
                </div>

                {/* password */}
                <div className={s.inpdiv}>
                    <input
                        type="text"
                        maxLength={32}
                        placeholder='password'
                        value={inputObj.password}
                        onChange={e => updateInputData('password', e.target.value)}
                    />
                    {inputObjErr.passwordErr != '' && <span>{inputObjErr.passwordErr}</span>}
                </div>
                <button
                    className={s.submitbtn}
                    onClick={submitData}
                >
                    <p className={s.phtext}>login</p>
                </button>
            </div>
        </div>
    )
})