---
title: 算法的复杂度分析
next: ./Complexity
---

# 如何分析、统计算法的执行效率和资源消耗



## 为什么需要复杂度（Complexity）分析

1、复杂度分析是什么？
复杂度分析是寻找程序运行所需的时间和空间随着数量级增长而变化的规律，时间规律就叫时间复杂度，空间规律就叫空间复杂度。
2、为什么需要复杂度分析
为什么不用直接跑一下代码的方法来直接得到程序运行的时间和空间复杂度。
(1)这种方法确实是准确的，但是是事后统计，有非常大的局限性。
(2)测试结果依赖测试环境，不同的机器、CPU等运行的结果各不相同。
(3)数据集不同、数据规模大小的不同，对同一个算法的评估也是不同的。
所以我们需要一种不用具体数值就可以大致判读程序的执行效率的方法，这就是复杂度分析解决的问题。
3、大O复杂度表示法
现在用的多数是大O时间复杂度表示法。大o时间复杂度表示法并不具体表示代码真正执行的时间，而是表示代码执行时间随着数据规模增长的变化趋势。
在时间复杂度公式中，如果n很大时，公式中的低阶、常量、系数并不影响增长趋势，所以通常情况下都会忽略。比如说O(2n^2)，我们通常把这种复杂度直接称为n^2的时间复杂度。
4、复杂度分析方法
(1)只关注循环次数最多的一次
(2)加法法则，总复杂度等于量级最大的代码的复杂度
(3)乘法法则，嵌套代码的时间复杂度等于嵌套内外代码复杂度的乘积
5、四个复杂度
最好时间复杂度：程序在最理想情况下的时间复杂度
最坏时间复杂度：程序在最糟糕情况下的时间复杂度
平均时间复杂度：时间复杂度的加权平均值
均摊时间复杂度：大部分时间复杂度都很低，个别时间复杂度比较高，而且存在连续的连贯时序关系，将时间复杂度高的操作均摊到时间复杂度低的操作上，得到的就是均摊时间复杂度。
6、思考题
无限数组添加元素的时间复杂度分析：
(1)最好情况下，有空闲空间，直接添加，时间复杂度时O（1）
(2)最坏情况下，没有空闲空间，需要进行扩容，并遍历赋值给新数组，时间复杂度时O(n)
(3)平均时间复杂度, 分为有空间和没空间两种情况，有空间的n种，没空间的一种，而有空间的每种概率都是一样的，所以平均时间复杂度=1*1/(n+1) + 1*1/(n+1)  + 1*1/(n+1) + ... + 1*1/(n+1)  + n*1/(n+1) = O(1)
(4)均摊时间复杂度，该程序刚好符合均摊时间复杂度的情况，所以均摊时间复杂度也是O(1)