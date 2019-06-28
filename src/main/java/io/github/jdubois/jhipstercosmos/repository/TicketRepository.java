package io.github.jdubois.jhipstercosmos.repository;

import io.github.jdubois.jhipstercosmos.domain.Ticket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data MongoDB repository for the Ticket entity.
 */
@Repository
public interface TicketRepository extends MongoRepository<Ticket, String> {

    @Query("{}")
    Page<Ticket> findAllWithEagerRelationships(Pageable pageable);

    @Query("{}")
    List<Ticket> findAllWithEagerRelationships();

    @Query("{'id': ?0}")
    Optional<Ticket> findOneWithEagerRelationships(String id);

}
