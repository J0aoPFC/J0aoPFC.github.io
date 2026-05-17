package unidade2;

import javax.swing.JOptionPane;

public class Jantar {

	public static void main(String[] args) {
		
		 final double taxa_garcom = 0.1;  //constante
		 double valor_jantar, valor_jantar_total;
		 
		 valor_jantar = Double.parseDouble(JOptionPane.showInputDialog("informar o valor do Jantar"));
	     valor_jantar_total = valor_jantar + (taxa_garcom*valor_jantar);
	     JOptionPane.showMessageDialog(null, "O valor total do jantar a ser pago e de "+valor_jantar_total);

	}

}
