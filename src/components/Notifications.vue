<template>
  <div class="container">
    <div class="notifi d">
      <div class="row">
       
        <div class=" d-flex flex-column">
          <h4 class="d-inline-block notifiHeading">Nofitications <div class="notificaton-count">{{ this.token ? this.notifications.length : 0 }}</div> </h4>
        </div>
        
      </div>
      <div v-if="this.token" class="notifi-section">
        <!-- notifications -->
        <div v-for="notifie of this.notifications" :key="notifie.id" class="card notifications">
          <h5 class="h1Notifi">{{notifie.title}}</h5>
          <div class="card-body">
            {{notifie.des}}
          </div> 
          <span>{{notifie.createdAt.split("T")[1].slice(0,5) +' '+notifie.createdAt.split("T")[0]}}</span>
        </div>
        <!--  -->
         <hr>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["notifications"]),
    ...mapState(['token'])

  }
};
</script>
<style scoped>
.h1Notifi{
  margin-top: 5px;
}
.notificaton-count{
  border: 3px dotted darkgreen;
  display: inline-block;
  padding:4px;
  border-radius: 205px;
  width: 40px;
  font-size: 20px;
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
