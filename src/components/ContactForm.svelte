<style>
  .contact-wrapper {
    display: flex;
  }

  .contact-wrapper .email-input {
    outline: none;
    font-size: 18px;
    font-weight: 400;
    border: none;
    border-bottom: 1px solid #979797;
    padding-bottom: 10px;
  }

  .contact-wrapper .email-input::placeholder {
    color: #aaaaaa;
  }

  .contact-wrapper .submit-btn {
    outline: none;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 24px;
    background: #166ff7;
    max-width: 120px;
    box-shadow: 0 2px 7px hsla(0, 0%, 0%, 0.5);
  }

  .contact-wrapper .submit-btn:hover {
    color: #75a8f6;
  }

  @media screen and (min-width: 768px) {
    .contact-wrapper .email-input {
      flex: 3 3;
      margin-right: 20px;
    }
  }

  @media screen and (max-width: 767px) {
    .contact-wrapper {
      flex-direction: column;
    }

    .contact-wrapper .submit-btn {
      margin-top: 13px;
      margin-bottom: 30px;
    }
  }
</style>

<form
  action="https://oursky.us2.list-manage.com/subscribe/post?u=34db69ee3e01fe49e12302054&amp;id=78e15b4a2a"
  method="post"
  name="mc-embedded-subscribe-form"
  class="contact-wrapper"
  rel="noopener"
  target="_blank"
  novalidate>
  <input
    class="email-input"
    value=""
    name="EMAIL"
    type="email"
    placeholder="Your Email" />
  <input type="submit" value="Talk to Us" name="subscribe" class="submit-btn" />
  <!-- Hidden input to prevent bot signups -->
  <div style="position: absolute; left: -5000px;" aria-hidden="true">
    <input
      type="text"
      name="b_34db69ee3e01fe49e12302054_78e15b4a2a"
      tabindex="-1"
      value="" />
  </div>
</form>
