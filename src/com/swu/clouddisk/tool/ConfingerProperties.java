package com.swu.clouddisk.tool;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Properties;

public class ConfingerProperties {
	private static List<String> confingers;
	
	private static Properties pro = new Properties();
	static{
		try {
			String str = ConfingerProperties.class.getResource("")+"/confinger.properties";
			pro.load(new FileInputStream(new File(new URI(str))));
			
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (URISyntaxException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static List<String> getConfingers(){
		
		return confingers;
	}
	public static String getConfinger(String key){
		return pro.getProperty(key);
	}
	public static void main(String[] args) {
		System.out.println(getConfinger("username"));
	}
}
