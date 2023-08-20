package com.bugsquashers.cosmowander.config;

import jakarta.persistence.EntityManagerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;

import javax.sql.DataSource;
import java.util.HashMap;

@Configuration
@EnableJpaRepositories(
        basePackages = "com.bugsquashers.cosmowander.centralized.person",
        entityManagerFactoryRef = "PersonEntityManagerFactory",
        transactionManagerRef = "PersonTransactionManager"
)
public class CentralizedPersonDatasourceConfig {
    @Bean(name="PersonDataSource")
    @ConfigurationProperties(prefix = "spring.datasource.central")
    public DataSource personDataSource() {
        return DataSourceBuilder.create().build();
    }

    @Bean(name="PersonEntityManagerFactory")
    public LocalContainerEntityManagerFactoryBean personEntityManagerFactory(
            EntityManagerFactoryBuilder managerFactory,
            @Qualifier("PersonDataSource") DataSource dataSource
    ) {
        HashMap<String, Object> props = new HashMap<>();
        props.put("hibernate.hbm2ddl.auto", "update");
        props.put("hibernate.dialect", "org.hibernate.dialect.MySQL8Dialect");

        return managerFactory
                .dataSource(personDataSource())
                .packages("com.bugsquashers.cosmowander.centralized.person")
                .persistenceUnit("centralized")
                .properties(props)
                .build();
    }

    @Bean(name="PersonTransactionManager")
    public PlatformTransactionManager personTransactionManager(final @Qualifier("PersonEntityManagerFactory") EntityManagerFactory personManager) {
        return new JpaTransactionManager(personManager);
    }
}
