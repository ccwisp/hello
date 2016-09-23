<script>

const ROWS=5;
const SPACES = function(n){
        if (n === 0){
          	return "";
        }
        return " " + SPACES(n-1);
};
     const STARS = function(n){
        if (n === 0){
          	return "";
        }
        return "*" + STARS(n-1);
        };
    const triangleStars = function(n){
		if(n === 0){
        	return '';
            }
        return  triangleStars(n-1) + "\n" + SPACES(ROWS - n) + STARS(2 * n -1)  ;
        };
        
    console.log(triangleStars(ROWS));
	</script>