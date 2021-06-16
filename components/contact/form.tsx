import styles from '../form.module.css'
import cn from 'classnames'

const Form = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} action="https://formspree.io/f/mjvjwzbl" method="POST">
        <div className={styles['form-row']}>
          <label
            htmlFor="email-input-field"
            className={cn(styles['input-label'], {
              [styles.focused]: false,
            })}
          >
            <input
              className={styles.input}
              type="text"
              id="name-input-field"
              name="name"
              // onChange={e => setEmail(e.target.value)}
              // onFocus={() => setFocused(true)}
              // onBlur={() => setFocused(false)}
              placeholder="Name"
              aria-label="Your name"
              required
            />
          </label>
        </div>
        <div className={styles['form-row']}>
          <label
            htmlFor="email-input-field"
            className={cn(styles['input-label'], {
              [styles.focused]: false,
            })}
          >
            <input
              className={styles.input}
              type="email"
              id="email-input-field"
              name="email"
              // onChange={e => setEmail(e.target.value)}
              // onFocus={() => setFocused(true)}
              // onBlur={() => setFocused(false)}
              placeholder="Your Email"
              aria-label="Your email address"
              required
            />
          </label>
        </div>
        <div className={styles['form-row']}>
          <label
            htmlFor="email-input-field"
            className={cn(styles['input-label'], {
              [styles.focused]: false,
            })}
          >
            <textarea
              className={cn(styles.input, styles.textarea)}
              autoComplete="off"
              id="message"
              name="message"
              // onChange={e => setEmail(e.target.value)}
              // onFocus={() => setFocused(true)}
              // onBlur={() => setFocused(false)}
              placeholder="Your message"
              aria-label="Message"
              required
            />
          </label>
          <button type="submit" className={cn(styles.submit)} disabled={false}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
