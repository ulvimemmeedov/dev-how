<template>
  <div class="container">
    <div class="justify-content-center d-flex">
      <div class="col passresetdiv">
        <div>
          <div>
            <label class="labelnewpass" for="inputnewpass"
              ><h1>Enter new password</h1></label
            >
            <div class="inputdiv">
              <input
                aria-label="inputnewpass"
                placeholder="New password"
                id="ibputnewpass"
                type="password"
                class="form-control-sm"
              />
              <button class="btn">change</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.passresetdiv {
  color: #fafafa;
  background-color: transparent !important;
  width: 100%;
  height: 100%;
  border: 1px solid #fafafa;
  border-radius: 15px;
}
.inputdiv {
  margin: 55px;
}
.btn {
  margin-left: 5px;
  color: #fafafa;
  border: 1px solid transparent;
  margin-top: 1px;
  border-radius: 20px !important;
}
.btn:hover {
  border: 1px solid darkgreen;
}
.labelnewpass {
  margin-top: 55px;
}
#ibputnewpass {
  border: 2px solid transparent !important;
  background: transparent;
  color: #fafafa;
  width: 30%;
  border-radius: 20px !important;
}
#ibputnewpass:hover {
  border: 2px solid darkgreen !important;
}
#ibputnewpass:focus {
  outline: none;
}
</style>
