<template>
  <div class="container">
    <div class="notifi d">
      <div class="row">
        <div class="col-md"></div>
        <div class="col-md">
          <h4 class="d-inline-block notifiHeading">Nofitications <span class="notificaton-count">5</span> </h4>
        </div>
        <div class="col-md">
          <a class="close far fa-times-circle" href="#" @click="closeNoti"></a>
        </div>
      </div>
      <div class="notifi-section">
        <!-- notifications -->
        <div class="card notifications">
          <div class="card-body">
            Articleda bug tapildi.
          </div> 
        </div>
        <!--  -->
         <hr>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    closeNoti: Function,
  },
};
</script>
<style scoped>
.close {
  color: #000;
  font-size: 20px;
  text-decoration: none;
  margin-top: 2px;
  margin-left: 67%;
}
.card-body{
    margin-top:5px ;
}
.notifi {
  padding: 10px;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  background-color: #fafafa;
  border: 2px solid transparent;
  border-radius: 20px;
}
.notifiHeading {
  color: #000;
}
.notifi-section {
  margin: 55px;
  justify-content: center;
  overflow: auto;
  
}
@media (max-width: 880px) {
  .close {
      position: relative;
      left: 40%;
      bottom: 119%;
      margin-left: 0;
  }
  .notifi-section {
  margin: 0;
  justify-content: center;
}
}
</style>
