<template>
    <div class="search">
         <form>
              <div class="form-group">
                   <input type="text " class="form-control" placeholder="Search..">
              </div>
         </form>
    </div>
</template>

<script>
export default {
     props:{
          height:String
     }
}
</script>
<style lang="scss" scoped>
     .search{
         .form-group{
              margin:0;
               input {
                    background: #E4E4EB;
                    padding: rem(12px) rem(24px);
                    padding-left: 45px;
                    border-radius: 8px;
                    background-image: url("data:image/svg+xml,%0A%3Csvg id='search_icon' data-name='search icon' xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath id='Path_167' data-name='Path 167' d='M12.864,11.321h-.813l-.288-.278a6.7,6.7,0,1,0-.72.72l.278.288v.813L16.467,18,18,16.467Zm-6.175,0A4.631,4.631,0,1,1,11.321,6.69,4.625,4.625,0,0,1,6.69,11.321Z' fill='%23A1A1A5'/%3E%3C/svg%3E%0A");
                    background-repeat: no-repeat;
                    background-position: 16px center;
                    max-height: 52px;
                    border: 2px solid transparent;
                    color: rgba(82, 82, 82, 1);
                    min-width: 350px;
                    &::placeholder {
                         color: rgba(82, 82, 82, 0.5);
                    }
               }
         }
     }
</style>