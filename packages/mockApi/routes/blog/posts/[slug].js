const { successResp } = require('../../../utils');

module.exports = (req, res) => {
  const data = {
    id: 12845,
    slug: '45210957b48cad68bf241ca97b1c16a8ca028ea4',
    version: 2,
    title: 'TiDB 5.3 发版 —— 跨越可观测性鸿沟，实现 HTAP 性能和稳定性的新飞跃',
    content:
      '[{"type":"paragraph","children":[{"text":"“当用户使用软件时，会需要面对的两个鸿沟：一个是执行的鸿沟，在这里，用户要弄清楚如何操作，与软件「对话」；另一个是评估的鸿沟，用户要弄清楚操作的结果。” PingCAP 联合创始人兼 CTO 黄东旭在《做出让人爱不释手的基础软件》中提到，“ 我们作为设计师的使命就是帮助用户消除可观测性和可交互性这两个鸿沟。”"}]},{"type":"paragraph","children":[{"text":"2021 年 11 月 30 日， "},{"strong":true,"text":"TiDB 5.3.0 版本正式上线"},{"text":" ，该版本推出持续性能分析 （Continuous Profiling) 功能（目前为实验特性），跨越可观测性的鸿沟，为用户带来数据库源码水平的性能洞察，彻底解答每一个数据库问题。"}]},{"type":"paragraph","children":[{"text":"在提升数据可观测性的同时， "},{"strong":true,"text":"TiDB 5.3.0 实现了 HTAP 性能和稳定性的大幅提升，数据迁移效率、高可用性和易用性也实现了大幅提升"},{"text":" ，为所有用户带来重磅福利。"}]},{"type":"paragraph","children":[{"type":"link","children":[{"type":"image","url":"https://asktug.com/uploads/default/original/4X/7/b/d/7bdfd606dc917800d9550c355e0a9f5a0b03bda2.jpeg","title":null,"alt":"3b9a725d29b2dd85008fde6ec4eb5979","children":[{"text":""}]}],"url":"https://asktug.com/uploads/default/original/4X/7/b/d/7bdfd606dc917800d9550c355e0a9f5a0b03bda2.jpeg","title":"3b9a725d29b2dd85008fde6ec4eb5979.jpg"}]},{"type":"heading","depth":3,"children":[{"strong":true,"text":"5.3.0 功能亮点与用户价值"}]},{"type":"list","children":[{"type":"listItem","children":[{"type":"paragraph","children":[{"text":"支持持续性能分析 (Continuous Profiling) ，引领数据库的可观测性潮流"}]}],"checked":null,"spread":false},{"type":"listItem","children":[{"type":"paragraph","children":[{"text":"深度优化分布式时间戳获取技术，提升系统的整体性能"}]}],"checked":null,"spread":false},{"type":"listItem","children":[{"type":"paragraph","children":[{"text":"持续优化存储和计算引擎，提供更敏捷更可靠的 HTAP 服务"}]}],"checked":null,"spread":false},{"type":"listItem","children":[{"type":"paragraph","children":[{"text":"进一步降低上游系统同步数据至 TiDB 的延迟，助力高峰期业务增长"}]}],"checked":null,"spread":false},{"type":"listItem","children":[{"type":"paragraph","children":[{"text":"新增并行导入功能，提升全量数据迁移效率"}]}],"checked":null,"spread":false},{"type":"listItem","children":[{"type":"paragraph","children":[{"text":"引入临时表，一条 SQL 语句简化业务逻辑并提升性能"}]}],"checked":null,"spread":false}],"ordered":false,"start":null,"spread":false},{"type":"heading","depth":3,"children":[{"strong":true,"text":"支持持续性能分析，引领数据库的可观测性潮流"}]},{"type":"paragraph","children":[{"text":"在企业遭遇的 IT 故障中，约有 30% 与数据库相关。当这些故障涉及到应用系统、网络环境、硬件设备时，恢复时间可能达到数小时，对业务连续性造成破坏，影响用户体验甚至营收。在复杂分布式系统场景下，如何提高数据库的可观测性，帮助运维人员快速诊断问题，优化故障处理流程一直是困扰着企业的一大难题。在 TiDB 5.3.0 版本中，PingCAP 率先在数据库领域推出了持续性能分析 (Continuous Profiling) 特性（目前为实验特性），为企业提供了数据库源码水平的性能洞察。"}]},{"type":"paragraph","children":[{"text":"持续性能分析以低于 0.5% 的性能损耗实现了对数据库内部运行状态持续打快照（类似 CT 扫描），以火焰图的形式从系统调用层面解读资源开销。让原本 "},{"strong":true,"text":"黑盒"},{"text":" 的数据库变成 "},{"strong":true,"text":"白盒"},{"text":" 。在 TiDB Dashboard 上一键开启持续性能分析后，运维人员可以方便快速定位性能问题的根因，无论过去现在皆可回溯。"}]},{"type":"paragraph","children":[{"type":"link","children":[{"type":"image","url":"https://asktug.com/uploads/default/original/4X/d/4/b/d4b5c7461f5bd2e743484af06c15014cc38f582a.png","title":null,"alt":"be5a9a68d796bbcd88eb783333b3af1a","children":[{"text":""}]}],"url":"https://asktug.com/uploads/default/original/4X/d/4/b/d4b5c7461f5bd2e743484af06c15014cc38f582a.png","title":"be5a9a68d796bbcd88eb783333b3af1a.png"}]},{"type":"heading","depth":4,"children":[{"text":"* "},{"strong":true,"text":"当数据库意外宕机时，可降低至少 50% 诊断时间"}]},{"type":"paragraph","children":[{"text":"在互联网行业的一个案例中，当客户集群出现报警业务受影响时，因缺少数据库连续性能分析结果，运维人员难以发现故障根因，耗费 3 小时才定位问题恢复集群。如果使用 TiDB 的持续性能分析功能，运维人员可比对日常和故障的分析结果，仅需 20 分钟就可恢复业务，极大减少损失。"}]},{"type":"heading","depth":4,"children":[{"text":"* "},{"strong":true,"text":"在日常运行中，可提供集群巡检和性能分析服务，保障集群持续稳定运行"}]},{"type":"paragraph","children":[{"text":"持续性能分析是 TiDB 集群巡检服务的关键，为商业客户提供了集群巡检和巡检结果数据上报。客户可以自行发现和定位潜在风险，执行优化建议，保证每个集群持续稳定运行。"}]},{"type":"heading","depth":4,"children":[{"text":"* "},{"strong":true,"text":"在数据库选型时，提供更高效的业务匹配"}]},{"type":"paragraph","children":[{"text":"在进行数据库选型时，企业往往需要在短时间内完成功能验证、性能验证的流程。持续性能分析功能能够协助企业更直观地发现性能瓶颈，快速进行多轮优化，确保数据库与企业的业务特征适配，提高数据库的选型效率。"}]},{"type":"paragraph","children":[{"strong":true,"text":"注："},{"text":" 性能分析结果存储在监控节点上，不会对处理业务流量的节点产生影响。"}]},{"type":"heading","depth":3,"children":[{"strong":true,"text":"深度优化分布式时间戳获取技术，为海量业务数据处理提供坚强后盾"}]},{"type":"paragraph","children":[{"text":"当互联网行业的核心业务系统具有庞大的用户数量和业务数据时，在高并发访问的场景下，可能会出现数据库时间戳获取延迟增大而导致业务响应变慢、超时频发、用户体验急剧下降的情况。海量的业务数据要求数据库拥有良好的扩展性。TiDB 本身拥有能够水平扩展的优势，但是不断增长的业务数据量使时间戳获取能力逐渐成为阻碍集群扩展的瓶颈，最终限制集群整体的扩展。"}]},{"type":"paragraph","children":[{"text":"为进一步提升时间戳获取能力，在 TiDB 5.3.0 版本中，TiDB 在保持原有的全局时间戳管理方式的基础上，新增两个时间戳处理调优参数，在 PD 负载达到瓶颈的情况下，可以有效减轻负载，降低了时间戳获取延迟，大大提升了系统的整体性能："}]},{"type":"list","children":[{"type":"listItem","children":[{"type":"paragraph","children":[{"text":"支持参数设置 PD follower proxy 开关，开启后允许 follower 批量转发时间戳处理请求。"}]}],"checked":null,"spread":false},{"type":"listItem","children":[{"type":"paragraph","children":[{"text":"支持设置 PD client 批量处理时间戳的最大等待时间参数，提高时间戳请求的处理带宽。"}]}],"checked":null,"spread":false}],"ordered":false,"start":null,"spread":false},{"type":"paragraph","children":[{"text":"通过本次优化，TiDB 能够更好地支撑百 TB 或百万 QPS 大规模集群的扩展。经过 Sysbench 512 线程的测试验证，时间戳处理流程优化后，TiDB 集群整体 QPS 吞吐提升了 100% 以上。"}]},{"type":"paragraph","children":[{"text":"具体测试环境如下："}]},{"type":"table","children":[{"type":"tableRow","children":[{"type":"tableCell","children":[{"text":"角色"}]},{"type":"tableCell","children":[{"text":"数量"}]},{"type":"tableCell","children":[{"text":"规格"}]}]},{"type":"tableRow","children":[{"type":"tableCell","children":[{"text":"TiDB"}]},{"type":"tableCell","children":[{"text":"26"}]},{"type":"tableCell","children":[{"text":"8 cores"}]}]},{"type":"tableRow","children":[{"type":"tableCell","children":[{"text":"PD"}]},{"type":"tableCell","children":[{"text":"3"}]},{"type":"tableCell","children":[{"text":"4 cores"}]}]},{"type":"tableRow","children":[{"type":"tableCell","children":[{"text":"TiKV"}]},{"type":"tableCell","children":[{"text":"5"}]},{"type":"tableCell","children":[{"text":"12 cores"}]}]}],"align":[null,null,null]},{"type":"paragraph","children":[{"text":"本次优化适用于以下场景："}]},{"type":"list","children":[{"type":"listItem","children":[{"type":"paragraph","children":[{"text":"拥有百 TB 或 百万 QPS 以上超大规模集群，需要实现大规模集群的扩展。"}]}],"checked":null,"spread":false},{"type":"listItem","children":[{"type":"paragraph","children":[{"text":"拥有中等规模集群，但随着业务的急速增长，数据的成倍增加，需要实现集群的无限扩展。"}]}],"checked":null,"spread":false}],"ordered":false,"start":null,"spread":false},{"type":"heading","depth":3,"children":[{"strong":true,"text":"持续优化存储和计算引擎，提供更敏捷更可靠的 HTAP 服务"}]},{"type":"paragraph","children":[{"text":"在大型物流和金融服务类企业中，在线交易和实时业务监控等应用场景对数据有较高的一致性和时效性要求，尤其是当读写混合负载大时，会对数据库管理系统的性能和稳定性形成较大挑战。在年度流量峰值时段，数据平台的写入/更新和分析任务往往会激增数倍。例如，某合作伙伴（物流龙头）在双十一期间，每天处理超 2500 亿条更新和插入记录，同时还要兼顾海量历史数据（50 亿～100 亿）的分析任务。"}]},{"type":"paragraph","children":[{"text":"TiDB HTAP 致力于为企业的规模化在线交易和实时分析应用提供一栈式数据服务平台，提升关键业务的时效性，降低数据技术栈的复杂性。在已有产品基础上，TiDB 5.3.0 进一步优化了 HTAP 的性能和稳定性，大幅改善了高混合负载场景下并发查询能力和查询任务的执行速度。主要的改进包括："}]},{"type":"list","children":[{"type":"listItem","children":[{"type":"paragraph","children":[{"strong":true,"text":"性能大幅提升（50%～100%），CPU /内存资源使用率进一步优化，查询失败减少："},{"text":" TiDB 5.3.0 优化了列式存储引擎，调整了存储引擎底层文件结构和 IO 模型，优化了访问节点副本和文件区块的计划，缓和了写放大问题以及改进了普遍的代码效率。总体上高负载时因资源不足造成的失败状况大大缓解。"}]}],"checked":null,"spread":false},{"type":"listItem","children":[{"type":"paragraph","children":[{"strong":true,"text":"远程数据读取提速，任务成功率提高，告警可读性增强："},{"text":" 优化了 MPP 计算引擎，支持更多的字符串/时间和其他函数/算子下推至 MPP 引擎，并改善了存储层写入/更新事务量较大时数据等待造成内部进程超时的问题，同时还优化了查询请求的告警信息，便于追踪和定位问题。"}]}],"checked":null,"spread":false},{"type":"listItem","children":[{"type":"paragraph","children":[{"strong":true,"text":"轻松扩展节点："},{"text":" 在 TiDB 5.3.0 中，TiDB HTAP 架构可随业务增长轻松扩展到 200 节点甚至更大的集群规模，并且确保 OLTP 与 OLAP 之间原则上不产生资源冲突和相互性能影响。"}]}],"checked":null,"spread":false},{"type":"listItem","children":[{"type":"paragraph","children":[{"strong":true,"text":"增强运维能力："},{"text":" 完善了数据校验，解决了节点重启时内部处理可能出现的问题；同时进一步提升了 SQL 告警信息和增强了日志收集、检索功能。"}]}],"checked":null,"spread":false}],"ordered":false,"start":null,"spread":false},{"type":"heading","depth":3,"children":[{"strong":true,"text":"低延迟同步至 TiDB，助力企业业务持续增长"}]},{"type":"paragraph","children":[{"text":"伴随着业务持续增长，企业订单系统的数据库压力也不断增加。核心交易库写流量巨大，造成订单提交时间变长，影响网站用户体验。面对这一典型的业务场景，为了帮助提升企业缩短订单提交时间，TiDB 支持作为下游只读从库提供业务查询服务，为核心交易系统减压。"}]},{"type":"paragraph","children":[{"strong":true,"text":"TiDB Data Migration (DM) 作为一款实时的数据同步工具，支持将数据从与 MySQL 协议兼容的数据库同步到 TiDB，实现业务分流，减轻高峰期前端订单写入时的压力"},{"text":" 。而交易场景高度的即时性，要求业务查询延迟极低、数据实时性极高，这给 DM 的同步性能带来了极大挑战。"}]},{"type":"paragraph","children":[{"text":"为了保证低延迟，数据迁移工具 DM 在 v5.3.0 实现了两项优化："}]},{"type":"list","children":[{"type":"listItem","children":[{"type":"paragraph","children":[{"text":"合并单行数据的多次变更，减少同步到下游的 SQL 数量，提高迁移效率，降低数据延迟，为网站用户更快地提供业务查询服务；"}]}],"checked":null,"spread":false},{"type":"listItem","children":[{"type":"paragraph","children":[{"text":"批量的点查更新合并为单一的语句操作，减少远程过程调用请求的数量，同样数量的 binlog 可以更快地同步完成，进而降低延迟，为网站用户更准确地提供业务查询服务。"}]}],"checked":null,"spread":false}],"ordered":false,"start":null,"spread":false},{"type":"paragraph","children":[{"text":"极低的同步延迟保障了下游 TiDB 数据查询实时性，企业在保持现有架构的情况下，无需进行大规模改造，就能快速引入 TiDB 以增强实时查询分析能力，更好更快萃取数据价值。"}]},{"type":"paragraph","children":[{"text":"经场景实测，在 300K QPS 数据同步流量下，99.9% 时间内 DM 同步延迟降低至 1 秒以内，尤其适用于高负载业务压力下 TiDB 作为只读从库的场景。"}]},{"type":"heading","depth":3,"children":[{"strong":true,"text":"新增并行导入功能，提升全量数据迁移效率"}]},{"type":"paragraph","children":[{"text":"目前 MySQL 分库分表架构日益普遍，很多企业的数据量已经达到百 TB 级别。随着企业数据量的增长，从集中式数据库迁移到以 TiDB 为代表的分布式数据库已经成为必然，然而存量系统里面的 100 TB 数据没有方便高效的工具进行迁移。"}]},{"type":"paragraph","children":[{"text":"为解决此问题，TiDB 5.3.0 发布了 TiDB Lightning 并行导入功能，提供了高效的 TiDB 集群初始化能力。用户可以同时启动多个 TiDB Lightning 实例，并行地将单表或者多表数据迁移到 TiDB， "},{"strong":true,"text":"速度可以横向扩展，极大地提高了数据迁移效率"},{"text":" 。"}]},{"type":"paragraph","children":[{"text":"并行导入示意图如下。用户可以使用多个 TiDB Lightning 实例导入 MySQL 的分表到下游的 TiDB 集群。"}]},{"type":"paragraph","children":[{"type":"link","children":[{"type":"image","url":"https://asktug.com/uploads/default/original/4X/5/0/8/50846f1a36d7a32d14ede6450ef9dfb23cf6cd89.png","title":null,"alt":"9ac4db84ebf077ce3629fac303351f0f","children":[{"text":""}]}],"url":"https://asktug.com/uploads/default/original/4X/5/0/8/50846f1a36d7a32d14ede6450ef9dfb23cf6cd89.png","title":"9ac4db84ebf077ce3629fac303351f0f.png"}]},{"type":"paragraph","children":[{"text":"并行导入功能支持多种数据源，包括：CSV/SQL 格式的文本数据、MySQL 分表导出数据 。支持的最大单表规模在 20 TB ～ 30 TB 之间，导入单表数据建议使用 1 个 ～ 8 个 TiDB Lightning 实例，每个实例最佳规模保持在 2 TB～ 5 TB 。对于多表总规模和使用 Lightning 的个数没有上限要求。"}]},{"type":"paragraph","children":[{"text":"经测试，使用 10 台 TiDB Lightning，20 TB 规模的 MySQL 数据可以在 8 小时内导入到 TiDB，单台 TiDB Lightning 可以支持 250 GB/s 的导入速度，整体效率提升了 8 倍。"}]},{"type":"heading","depth":3,"children":[{"strong":true,"text":"引入临时表，一条 SQL 语句简化业务逻辑并提升性能"}]},{"type":"heading","depth":4,"children":[{"strong":true,"text":"业务临时中间数据存储不易"}]},{"type":"paragraph","children":[{"text":"在数据量大的场景下，用户业务常常需要处理庞大的中间数据。如果业务需要反复使用数据中的一部分子集，用户通常会临时保存这部分数据，用完后释放。因此，DBA 不得不频繁地建表和删表，可能还需要自行设计数据存储结构，把中间数据存储至业务模块中。这不仅增加了业务复杂度，也造成了庞大的内存开销，而且如果管理不善，还存在内存泄漏导致系统崩溃的风险。"}]},{"type":"heading","depth":4,"children":[{"strong":true,"text":"TiDB 临时表帮助用户简化业务逻辑并提升性能"}]},{"type":"paragraph","children":[{"text":"为帮助用户解决以上痛点，TiDB 在 5.3.0 版本中引入了临时表功能。该功能针对业务中间计算结果的临时存储问题，让用户免于频繁地建表和删表等操作。用户可将业务上的中间计算数据存入临时表，用完后自动清理回收， "},{"strong":true,"text":"避免业务过于复杂，减少表管理开销，并提升性能"},{"text":" 。"}]},{"type":"paragraph","children":[{"text":"TiDB 临时表主要应用于以下业务场景："}]},{"type":"list","children":[{"type":"listItem","children":[{"type":"paragraph","children":[{"text":"缓存业务的中间临时数据，计算完成后将数据转储至常规表，临时表会自动释放。"}]}],"checked":null,"spread":false},{"type":"listItem","children":[{"type":"paragraph","children":[{"text":"短期内对同一数据进行多次 DML 操作。例如在电商购物车应用中，添加、修改、删除商品及完成结算，并移除购物车信息。"}]}],"checked":null,"spread":false},{"type":"listItem","children":[{"type":"paragraph","children":[{"text":"快速批量导入中间临时数据，提升导入临时数据的性能。"}]}],"checked":null,"spread":false},{"type":"listItem","children":[{"type":"paragraph","children":[{"text":"批量更新数据。将数据批量导入到数据库的临时表，修改完成后再导出到文件。"}]}],"checked":null,"spread":false}],"ordered":false,"start":null,"spread":false},{"type":"heading","depth":4,"children":[{"strong":true,"text":"一条 SQL 语句轻松创建临时表"}]},{"type":"paragraph","children":[{"text":"可通过 CREATE [GLOBAL] TEMPORARY TABLE 语句创建临时表。临时表中的数据均保存在内存中，用户可通过 tidb_tmp_table_max_size 变量限制临时表的内存大小。"}]},{"type":"paragraph","children":[{"text":"TiDB 提供的临时表分为 Global 和 Local 两类，无论使用哪种临时表，都能有 "},{"strong":true,"text":"效帮助用户简化业务逻辑并提升性能"},{"text":" ："}]},{"type":"list","children":[{"type":"listItem","children":[{"type":"paragraph","children":[{"text":"Global 临时表："}]}],"checked":null,"spread":false},{"type":"listItem","children":[{"type":"paragraph","children":[{"text":"对集群内所有 Session 可见，表结构持久化。"}]}],"checked":null,"spread":false},{"type":"listItem","children":[{"type":"paragraph","children":[{"text":"提供事务级别的数据隔离，数据只在事务内有效，事务结束后自动删除数据。"}]}],"checked":null,"spread":false},{"type":"listItem","children":[{"type":"paragraph","children":[{"text":"Local 临时表："}]}],"checked":null,"spread":false},{"type":"listItem","children":[{"type":"paragraph","children":[{"text":"只对当前 Session 可见，表结构不持久化。"}]}],"checked":null,"spread":false},{"type":"listItem","children":[{"type":"paragraph","children":[{"text":"支持重名，用户无需为业务设计复杂的表命名规则。"}]}],"checked":null,"spread":false}],"ordered":false,"start":null,"spread":false},{"type":"paragraph","children":[{"text":"提供会话级别的数据隔离，降低业务设计复杂度，会话结束后删除临时表。"}]},{"type":"heading","depth":3,"children":[{"strong":true,"text":"结语"}]},{"type":"paragraph","children":[{"text":"本次发布的 5.3.0 版本 "},{"strong":true,"text":"进一步完善了系统的可观测性、提升了分布式数据库可扩展性、保证了数据的低延迟同步、大幅提升了全量数据迁移效率、提升了实时分析的稳定性"},{"text":" ，是 TiDB 迈向成熟企业级 HTAP 平台的一个重要里程碑。"}]},{"type":"paragraph","children":[{"text":"PingCAP 首席架构师唐刘表示：TiDB HTAP 的使命不仅仅局限于对传统数据库的升级或者是交易和分析处理性能的提升，本质上 TiDB HTAP 是一个开放的生态体系，在企业中承担着支持数据服务消费化和构建统一实时数据服务平台的角色，为用户带来业务与架构的创新与提升。"}]},{"type":"paragraph","children":[{"text":"TiDB 的每一次发版和进步都离不开每一位用户的反馈、每一位开发者的 PR 合并、每一位质量保证人员的测试。感谢所有人的贡献，TiDB 在后续版本中会不断加强大规模场景下的稳定性和易用性， "},{"strong":true,"text":"不忘初心，砥砺前行，成为一款让人爱不释手的基础软件"},{"text":" ，给用户带来更好的使用体验。"}]}]',
    status: 'PUBLISHED',
    origin: 'ORIGINAL',
    sourceURL: null,
    rejectReason: null,
    author: {
      id: 221,
      username: 'Billmay',
      avatarURL: 'https://asktug.com/user_avatar/asktug.com/billmay/50/81311_2.png',
    },
    category: {
      id: 1006,
      name: '社区动态',
      slug: 'community-feeds',
      description: '',
    },
    tags: [],
    recommended: true,
    recommender: {
      id: 1,
      username: 'root',
      avatarURL: '',
    },
    recommendAt: '2021-12-15T03:08:21.000+00:00',
    publisher: {
      id: 1,
      username: 'root',
      avatarURL: '',
    },
    publishedAt: '2021-12-02T02:47:58.000+00:00',
    likes: 2,
    liked: false,
    shares: 0,
    favorites: 1,
    favorited: false,
    visits: 1,
    comments: 0,
  };
  return successResp(data)(req, res);
};