<template>
  <transition v-if="modalVisible" name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div :style="{width:width, minHeight:height}" class="modal-container">
         <div>
           <img @click="closeModal" id="close" alt="close" src="@/assets/icons/close.png">
         </div>
          <div class="modal-header">

            <slot name="header">
<!--              default header-->
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
<!--              default body-->
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
<!--              default footer-->
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
props:{
  modalVisible:{
    type:Boolean,
    default:false
  },
  width:{
    type:String | Number,
    default: '300px'
  },
  height:{
    type: String | Number,
    default: '300px'
  }
},

  methods:{
  closeModal()  {
    this.$emit('close')
  }
  }
}
</script>

<style lang="scss">
@import "styles";
</style>
