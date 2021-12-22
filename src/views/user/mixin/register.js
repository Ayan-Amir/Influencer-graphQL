import { mapGetters } from 'vuex'
export default{
    computed: {
		...mapGetters(['isAuthenticated', 'user'])
	},   
    created(){
        if(!this.isAuthenticated){
            this.$router.push('/user/login');
        }
    }
}