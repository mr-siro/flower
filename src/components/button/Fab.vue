<template>
  <div class="fab-wrapper"><a href="#" class="fab-button">
    <img style="width: 40px; height: 40px" src="@/assets/icons/gear.png">
  </a>
    <ul class="fab-item-list">
      <li class="fab-item">
        <img style="width: 40px; height: 40px" src="@/assets/icons/logout.png">
       <span>logout</span>
      </li>
      <li class="fab-item"><a href="#">
        <slot name="option2"></slot>
      </a></li>
      <li class="fab-item"><a href="#">
        <slot name="option3"></slot>
      </a>
       </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Fab",
  props:{
    fabIcon :{type:String, default:"+"},
  },
}
</script>

<style lang="scss">
/*** SASS Variabls &
     Global Styles   ***/

$color-black: #292e31;
$color-white: #ffffff;


/*** FAB Button
Component Styles***/

/*Fab Variables*/
$fab-icon-color: #ffffff;

$fab-size: 40px;
$fab-color: #EA60A7;

$fab-item-size: 50px;
$fab-item-color: #0D9DDB;

/*FAB Styles*/

.fab-wrapper {
  position: relative;
  z-index: 5;

  &:hover .fab-item-list {
    bottom: $fab-size;
    opacity: 1;
    transition: 0.5s ease-in;
  }
}

.fab-button {
  width: $fab-size;
  height: $fab-size;
  //background-color: $fab-color;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  //box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.25);
    //box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  }
}

.fab-button p {
  font-size: 30px;
  color: $fab-icon-color;
  text-align: center;
  line-height: $fab-size;
}

.fab-item-list {
  opacity: 0;
  width: 100%;
  position: absolute;
  padding: 0px;
  list-style: none;
  bottom: 0px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease-in-out;
}

.fab-item {
  background: $fab-item-color;
  width: $fab-item-size;
  height: $fab-item-size;
  border-radius: 50%;
  text-align: center;
  color: $color-white;
  margin-bottom: 12px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.1s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
  }
}

/*** Non related FAB Button
     Component Styles       ***/


.title {
  margin-left: 24px;
  margin-right: 24px;
  color: $color-black;
}

.title div {
  width: 70vw;
  background: $color-white;
  border-radius: 4px;
  border-top: 4px solid #00C18C;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: left;
  padding: 12px 12px 24px 12px;
}

.title h2 {
  font-size: 1.5em;
  margin-bottom: 12px;
}

</style>
