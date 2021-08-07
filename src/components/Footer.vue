<template>
  <div>
    <footer class="footer-distributed">
      <div class="footer-left">
        <p class="footer-company-name"><span class="footer-brand-name" >Dev-How</span>  &copy; 2020</p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

.footer-brand-name{
  font-size: 25px;
font-family: 'VT323', monospace !important;
}
.footer-distributed {
  background-image: url("../assets/back.gif");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #292c2f;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  font: bold 16px sans-serif;
  padding: 15px;
  bottom: 0;
}

.footer-distributed .footer-left {
  display: inline-block;
  vertical-align: top;
}

.footer-distributed h3 {
  color: #ffffff;
  margin: 0;
}

.footer-distributed h3 span {
  color: #5383d3;
}

.footer-distributed .footer-links {
  color: #ffffff;
  margin: 20px 0 12px;
  padding: 0;
}

.footer-distributed .footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
}

.footer-distributed .footer-company-name {
  color: #8f9296;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}

@media (max-width: 880px) {
  .footer-distributed {
    font: bold 14px sans-serif;
  }

  .footer-distributed .footer-left {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }
}
</style>
