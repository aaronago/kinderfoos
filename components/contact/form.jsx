import styles from './form.module.css'
import formStyles from '../form.module.css'
import cn from 'classnames'
const Form = () => {
  return (
    <div className={styles.container}>
      <form className={formStyles.form}>
        <div className={formStyles['form-row']}>
          <label
            htmlFor="email-input-field"
            className={cn(formStyles['input-label'], {
              [formStyles.focused]: false,
            })}
          >
            <input
              className={formStyles.input}
              autoComplete="off"
              type="email"
              id="email-input-field"
              // onChange={e => setEmail(e.target.value)}
              // onFocus={() => setFocused(true)}
              // onBlur={() => setFocused(false)}
              placeholder="Enter email to register free"
              aria-label="Your email address"
              required
            />
          </label>
        </div>
      </form>
    </div>
  )
}

export default Form
