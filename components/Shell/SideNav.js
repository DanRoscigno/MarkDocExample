import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const items = [
  {
    title: 'Table Design',
    links: [
      { href: '/docs/loading/Loading_intro', children: 'Understanding StarRocks table design', subLinks: []},
      { href: '/docs/loading/Loading_intro', children: 'Table Types',
        subLinks: [
          { href: '/docs/loading/BrokerLoad', children: 'Loading with Broker Load' },
          { href: '/docs/loading/DataX-starrocks-writer', children: 'DataX' },
          { href: '/docs/loading/Etl_in_loading', children: 'Transform data at loading' },
          { href: '/docs/loading/Flink-connector-starrocks', children: 'Continuos load with Apache Flink' },
          { href: '/docs/loading/Flink_cdc_load', children: 'Realtime synchronization from MySQL' },
          { href: '/docs/loading/InsertInto', children: 'Load data using INSERT' },
          { href: '/docs/loading/Json_loading', children: 'Introduction' },
          { href: '/docs/loading/Load_to_Primary_Key_tables', children: 'Change data through loading' },
          { href: '/docs/loading/Loading_intro', children: 'Overview of data loading' },
          { href: '/docs/loading/RoutineLoad', children: 'Continuously load data from Apache Kafka' },
          { href: '/docs/loading/Spark-connector-starrocks', children: 'Load data using Spark connector' },
          { href: '/docs/loading/SparkLoad', children: 'Load data in bulk using Spark Load' },
          { href: '/docs/loading/StreamLoad', children: 'HTTP PUT' },
          { href: '/docs/loading/Stream_Load_transaction_interface', children: 'Load data using Stream Load transaction interface' },
          { href: '/docs/loading/cloud_storage_load', children: 'Load data from cloud storage' },
          { href: '/docs/loading/hdfs_load', children: 'Load data from HDFS' },
          //{ href: '/docs/loading/load_concept
          { href: '/docs/loading/load_from_pulsar', children: '[Preview] Continuously load data from Apache® Pulsar' },


        ]
      },
    ]
  },
];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sidenav">
      {items.map((item) => (
        <div key={item.title}>
          <h3>{item.title}</h3>
          <ul className="flex column">
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href} className={active ? 'active' : ''}>
                  <Link {...link}>
                    <a href={link.href}>{link.children}</a>
                  </Link>
            {link.subLinks.map((subLink) => {
              const active = router.pathname === subLink.href;
              return (
                <li key={subLink.href} className={active ? 'active' : ''}>
                  <Link {...subLink}>
                    <a href={subLink.href}>{subLink.children}</a>
                  </Link>

                </li>
              );
            })}

                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          nav {
            /* https://stackoverflow.com/questions/66898327/how-to-keep-footer-from-pushing-up-sticky-sidebar */
            position: sticky;
            top: var(--nav-height);
            height: calc(100vh - var(--nav-height));
            flex: 0 0 240px;
            overflow-y: auto;
            padding: 2rem 0 2rem 2rem;
          }
          h3 {
            font-weight: 500;
            margin: 0.5rem 0 0;
            padding-bottom: 0.5rem;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          li {
            list-style-type: none;
            margin: 0 0 0.7rem 0.7rem;
            font-size: 14px;
            font-weight: 400;
          }
          li a {
            text-decoration: none;
          }
          li a:hover,
          li.active > a {
            text-decoration: underline;
          }
          @media screen and (max-width: 600px) {
            nav {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
}
