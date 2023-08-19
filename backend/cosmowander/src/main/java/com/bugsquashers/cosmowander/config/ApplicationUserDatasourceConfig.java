package com.bugsquashers.cosmowander.config;

import jakarta.persistence.EntityManagerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.HashMap;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(
        basePackages = {
                "com.bugsquashers.cosmowander.user",
                "com.bugsquashers.cosmowander.entity",
                "com.bugsquashers.cosmowander.repository"
        },
        entityManagerFactoryRef = "UserEntityManagerFactory",
        transactionManagerRef = "UserTransactionManager"
)
public class ApplicationUserDatasourceConfig {
    @Primary
    @Bean(name="UserDataSource")
    @ConfigurationProperties(prefix = "spring.datasource.cosmowander")
    public DataSource userDataSource() {
        return DataSourceBuilder.create().build();
    }

    @Primary
    @Bean(name="UserEntityManagerFactory")
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(
            EntityManagerFactoryBuilder managerFactory,
            @Qualifier("UserDataSource") DataSource dataSource
    ) {
        HashMap<String, Object> props = new HashMap<>();
        props.put("hibernate.hbm2ddl.auto", "create-drop");

        return managerFactory
                .dataSource(userDataSource())
                .packages(
                        "com.bugsquashers.cosmowander.user",
                        "com.bugsquashers.cosmowander.entity",
                        "com.bugsquashers.cosmowander.repository"
                )
                .persistenceUnit("cosmowander")
                .properties(props)
                .build();
    }

    @Primary
    @Bean(name="UserTransactionManager")
    public PlatformTransactionManager transactionManager(final @Qualifier("UserEntityManagerFactory") EntityManagerFactory userManager) {
        return new JpaTransactionManager(userManager);
    }
}
