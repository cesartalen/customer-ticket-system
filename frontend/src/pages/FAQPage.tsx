export default function FAQPage() {
  return(
    <div className='faq-contents'>
      <div className='faq-label'>
        <a className='g-title'>Frequently asked questions</a>
        <a className='g-subtitle'>Read these before submitting your own ticket!</a>
      </div>
      <div className='faq-items'>
        <div className='faq-item'>
          <a className='faq-question'>Can I...</a>
          <a className='faq-answer'>Yes, head over to...</a>
        </div>
        <div className='faq-item'>
          <a className='faq-question'>Question 2</a>
          <a className='faq-answer'>Answer</a>
        </div>
        <div className='faq-item'>
          <a className='faq-question'>Question 3</a>
          <a className='faq-answer'>Answer</a>
        </div>
      </div>
    </div>
  )
}