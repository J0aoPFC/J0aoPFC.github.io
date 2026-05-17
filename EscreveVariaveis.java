package unidade2;

import javax.swing.JOptionPane;

public class EscreveVariaveis {

	public static void main(String[] args) {
      
	   //String fruta = "Banana";
	   double valor = 3.50;
	   String fruta = JOptionPane.showInputDialog("Digite a fruta"); 
	   //System.out.println("O valor da "+fruta+" e de "+valor);
	   JOptionPane.showMessageDialog(null, "O valor da "+fruta+" e de "+valor);
	   
	}  

}
