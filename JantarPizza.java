package unidade2;

import javax.swing.JOptionPane;

public class JantarPizza {

	public static void main(String[] args) {
		
		double valor_jantar = Double.parseDouble(JOptionPane.showInputDialog("informar o valor do Jantar"));
		int numero_clientes = Integer.parseInt((JOptionPane.showInputDialog("informar o número de clientes")));
		double valor_jantar_clientes = valor_jantar/numero_clientes;
		JOptionPane.showMessageDialog(null, "O valor total do jantar a ser pago e de "+valor_jantar_clientes+" para cada cliente");
		

	}

}
