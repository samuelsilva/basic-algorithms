public class BinarySearch {

    public static int BinarySearch(int element, int[] array) {
        int initArray = 0;
        int endArray = array.length - 1;
        int tryNumber;
        int middlePosition;
        int totalExecutions = 0;
        
        while(initArray <= endArray) {
            middlePosition = (initArray + endArray)/2;
            tryNumber = array[middlePosition];

            if(element == tryNumber) {
                return middlePosition;
            }

            if(tryNumber > element) {
                endArray = middlePosition - 1;
            } else {
                initArray = middlePosition + 1;
            }
            totalExecutions++;

        }
        return -1;
    }

    public static void main(String[] args) {
        int[] arrayOrdenated = {1,2,3,4,10,12,15,21,22,23,25,33,35,44,49,50,51,56,66,70,71,78,80,83,84,90,91,92,94,97,98,100};
 
        int resultado = BinarySearch(94,arrayOrdenated);
        System.out.println("Valor " + arrayOrdenated[resultado] + "encontrado no array na posicao:" + resultado);
    }

}