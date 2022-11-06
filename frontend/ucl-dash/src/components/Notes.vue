<template>
  <div class="notes-cont">
    <div class="notes-head">
      <svg xmlns="http://www.w3.org/2000/svg" width="30.849" height="30.849" viewBox="0 0 30.849 30.849">
        <path id="Icon_metro-pencil" data-name="Icon metro-pencil" d="M28.6,1.928A4.82,4.82,0,0,1,32.455,9.64l-1.928,1.928L23.779,4.82l1.928-1.928A4.8,4.8,0,0,1,28.6,1.928ZM4.5,24.1,2.571,32.777l8.676-1.928L29.081,13.014,22.333,6.266ZM24.128,12.881l-13.5,13.5L8.97,24.716l13.5-13.5,1.662,1.662Z" transform="translate(-2.571 -1.928)" fill="#500778"/>
      </svg>

      <div class="notes-text">
       My Notes
      </div>
    </div>
      <div class="user-notes">
        <textarea>
          {{note}}
        </textarea>
      </div>
    <div class="save-button">
      <button type="button" disabled>
        Save Notes
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notes.vue",
  computed: {
    note() {
      const detail = this.$store.getters['app/studentNote']
      if (detail === undefined) {
        return "Note here"
      } else {
        return detail;
      }
      
    },
  }
}
</script>

<style scoped>
  .notes-cont{
    width: 350px;
    background-color: white;
    margin: 30px 0 0 20px;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--secondary);
    border-radius: 8px;
  }
  .notes-head{
    margin: 20px;
    color: var(--primary);
    text-align: left;
    font: normal normal bold 26px/35px Segoe UI;
    display: flex;
    align-items: center;

  }
  .notes-text{
    margin-left: 10px
  }

  .user-notes{
    overflow: hidden;
    flex: 1;
    padding: 0px 20px;
  }
  .user-notes textarea{
    border: transparent;
    padding: 7px;
    resize: none;
    height: 100% ;
    width: 100%;
    outline: 0;
    box-sizing: border-box;
  }
  .save-button{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .save-button button{
    padding: 5px;
    margin: 20px;
    align-content: center;
    text-align: center;
  }

</style>